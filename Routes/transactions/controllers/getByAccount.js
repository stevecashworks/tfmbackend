import transactionModel from "../../../models/transactions.js"

const getByAccount= async(req,res,next)=>{
    try{
        const {accountId}= req.body;
        const fromTransactions= await transactionModel.find({from:accountId ,transactionType:"debit"})
        const toTransactions= await transactionModel.find({to:accountId,transactionType:"credit"})
        const accountTransactions=[...fromTransactions,...toTransactions]
        

        console.log(accountTransactions)
        return res.status(200).json({success:true, result:accountTransactions})
       
    }
    catch(error){
        console.log(error.message)
        return res.status(500).json({success:false, result:error.message})
    }
}
export default getByAccount