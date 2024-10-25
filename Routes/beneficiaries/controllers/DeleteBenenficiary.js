import createCustomError from "../../../createCustomError.js";
import beneficiaryModel from "../../../models/beneficiaries.js";
import userModel from "../../../models/users.js";
const  deleteBeneficiary=async(req,res,next)=>{
    try {
        const {email}= req.body;
        const {id} = req.user;
        const  beneficiary= await beneficiaryModel.findOne({email})
        
    
        console.log(id);
        const updatedUser= await userModel.findOneAndUpdate({_id:id},{$pull:{beneficiaries:beneficiary._id}})
        const deletedBeneficiary= await beneficiaryModel.findOneAndDelete({email})
    return res.status(200).json({success:true, result:"beneficiary deleted successfully"})
    } catch (error) {
        console.log(error.message)
        next(createCustomError(error.message))
    }
}
export default deleteBeneficiary