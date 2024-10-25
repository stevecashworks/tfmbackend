import transactionsModel from "../../../models/transactions.js"
import createCustomError from "../../../createCustomError.js"
const getAllTransactions=async(req,res,next)=>{
    try{
        const  allTransactions= await transactionsModel.find()
        return res.status(200).json({success:true, result:allTransactions})
    }catch(error){
    next(createCustomError(error.message))
    }
}

export default getAllTransactions