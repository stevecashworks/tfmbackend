import createCustomError from "../../../createCustomError.js";
import userModel from "../../../models/users.js";

const  editUser=async(req,res,next)=>{
    try {
        const {id}=  req.params
        const updatedUser= await userModel.findByIdAndUpdate(id,{$set:req.body},{new:true})
        return res.status(200).json({success:true, result:"User  detail(s) were updated succesfully",updatedUser})
    } catch (error) {
        next(createCustomError)
    }
}
export default editUser