import transactionModel from "../../../models/transactions.js";
import createCustomError from "../../../createCustomError.js";
import accountModel from "../../../models/accounts.js";
import mongoose from "mongoose"; // Import mongoose

const transfer = async (req, res, next) => {
    try {
        const { from, amount, to } = req.body;

        // Convert accountNumber strings to ObjectId
        
        // Create transactions
        const senderTransaction = await transactionModel.create({ ...req.body, to, from, transactionType: "debit" });
        const recipientTransaction = await transactionModel.create({ ...req.body, to,from, transactionType: "credit" });

        // Update both accounts
        const newSender = await accountModel.findOneAndUpdate(
            { accountNumber: from.accountNumber },
            { $inc: { balance: (-1 * amount) }, $push: { transactions: senderTransaction._id } },
            { new: true }
        );

        const newRecipient = await accountModel.findOneAndUpdate(
            { accountNumber: to.accountNumber },
            { $inc: { balance: amount }, $push: { transactions: recipientTransaction._id } },
            { new: true }
        );

        return res.status(200).json({ success: true, result: "Transaction Successful" });
    } catch (err) {
        console.log(err.message)
        next(createCustomError(err.message));
    }
};

export default transfer;
