import createCustomError from "../../../createCustomError.js"
import   accountsModel from "../../../models/accounts.js"


const getAllAccounts=async(req,res,next)=>{
    try {
        const allAccounts= await accountsModel
        .find()
        .populate("owner")
        .exec()
        
        return res.status(200).json({success:true,result:allAccounts})
        
    } catch (error) {
     next(createCustomError(error.message))   
    }
}

export default getAllAccounts