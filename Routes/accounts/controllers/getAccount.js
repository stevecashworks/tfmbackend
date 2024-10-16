import createCustomError from "../../../createCustomError.js";
import accountModel from "../../../models/accounts.js";
const  getAccount=async(req,res,next)=>{
    try{
        const {id}= req.params

         const thisAccount= await accountModel.findById(id)
          return  res.status(200).json({success:true, result:thisAccount})
    }catch(err){
next(createCustomError(err.message))
    }
}
export default getAccount
