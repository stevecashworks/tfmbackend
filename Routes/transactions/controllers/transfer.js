import transactionModel from "../../../models/transactions.js";
import createCustomError from "../../../createCustomError.js";
import accountModel from "../../../models/accounts.js"
const transfer= async(req,res,next)=>{

        try{
            const {from, amount,to}=req.body
           
            const senderAccount=await accountModel.findOne({accountNumber:from})
            const recipientAccount=await accountModel.findOne({accountNumber:to})
            
            
                    // checking that  recipients account exists will be done from the frontend
                const senderTransaction= await transactionModel.create({...req.body,to:recipientAccount, from:senderAccount, transactionType:"debit"})
                const recipientTransaction= await transactionModel.create({...req.body,to:recipientAccount, from:senderAccount, transactionType:"credit"})
                // update both accounts
                const  newSender= await accountModel.findOneAndUpdate({accountNumber:from}, {$inc:{balance:(-1*amount)}, $push:{transactions:senderTransaction._id} },{new:true})
                const  newRecipient= await accountModel.findOneAndUpdate({accountNumber:to}, {$inc:{balance:(amount)},$push:{transactions:recipientTransaction._id}  },{new:true})
                return res.status(200).json({success:true, result:"Transaction Successful"})
            
        }catch(err){
                next(createCustomError(err.message))
        }
}

export default transfer