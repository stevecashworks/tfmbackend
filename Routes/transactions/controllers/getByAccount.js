import transactionModel from "../../../models/transactions.js";

const getByAccount = async (req, res, next) => {
    try {
        const { accountId } = req.body;

        // Find transactions where the account is the sender (from)
        const toTransactions = await transactionModel
            .find({ "to.accountNumber": accountId, transactionType: "credit" })
            .populate({
                path: 'to',
                populate: {
                    path: 'owner', // assuming the `from` field references an Account which has an `owner` field
                    select: 'fullName', // assuming the owner's name is stored under `name`
                },
            });

        // Find transactions where the account is the recipient (to)
        const fromTransactions = await transactionModel
            .find({ "from.accountNumber": accountId, transactionType: "debit" })
            .populate({
                path: 'from',
                populate: {
                    path: 'owner', // assuming the `to` field references an Account which has an `owner` field
                    select: 'name',
                },
            });

        // Combine both transaction sets
        const accountTransactions = [...fromTransactions, ...toTransactions].sort((b,a)=>a.createdAt-b.createdAt);

        console.log(accountTransactions);
        return res.status(200).json({ success: true, result: accountTransactions });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ success: false, result: error.message });
    }
};

export default getByAccount;
