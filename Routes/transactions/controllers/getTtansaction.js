import transactionModel from "../../../models/transactions.js";

const getTransaction=async(req,res,next)=>{
    try{
        const  thisTransaction= await transactionModel.findById(req.params.id)
        return res.status(200).json({success:true, result:thisTransaction})
    }catch(err){
            next(createCustomError(err.message))
    }
}
export default getTransaction