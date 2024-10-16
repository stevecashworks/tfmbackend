import userModel from "../../../models/users.js";

const getAllUsers=async(req,res,next)=>{
try{
const   allUsers= await userModel.find().populate("accounts").exec()
return res.status(200).json({success:true, result:allUsers})
}
catch{
next(err.message)
}


}
export default getAllUsers