import createCustomError from "../../../createCustomError.js";
import userModel from "../../../models/users.js";

const getAllUsers=async(req,res,next)=>{
try{
const   allUsers= await userModel.find().populate("account").exec()
return res.status(200).json({success:true, result:allUsers})
}
catch(err){
next(createCustomError(err.message))
}


}
export default getAllUsers