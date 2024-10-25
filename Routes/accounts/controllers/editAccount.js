import createCustomError from "../../../createCustomError.js"
import accountModel from "../../../models/accounts.js"

const editAccount=async(req,res,next)=>{
    try {
        const accountId=req.params.id
        const  updatedAccount= await accountModel.findByIdAndUpdate(accountId,{$set:req.body}, {new:true});
        return res.status(200).json({success:true, result:updatedAccount})
    
    } catch (error) {
        console.log(error.message)
        next(createCustomError)
    }
}
export default editAccount