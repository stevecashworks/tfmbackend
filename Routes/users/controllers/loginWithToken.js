import jwt from "jsonwebtoken"
import createCustomError from "../../../createCustomError.js"
import userModel from "../../../models/users.js"


const loginWithToken=async(req,res,next)=>{
    try {
        const {id}= req.user
        const userDetails= await userModel.findById(id).populate({
            path:"account",
            populate:{
                path:"transactions"
            }
        })
        if(!userDetails){
            return res.status(404).json({success:false, result:"User not found"})
        
        }else{
            return res.status(200).json({success:true,result:userDetails})
        }      
    } catch (error) {
        next(createCustomError(error.message))
    }

}
export default loginWithToken