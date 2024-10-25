import jwt from "jsonwebtoken"
import createCustomError from "../../../createCustomError.js"
import beneficiaryModel from "../../../models/beneficiaries.js"
import userModel from "../../../models/users.js"

const beneficiaryLogin=async(req,res,next)=>{
try {
    const {email,password}= req.body
    const beneficiary = await beneficiaryModel.findOne({email}).populate("owner")
    console.log(beneficiary)
    if(!beneficiary){
        return res.status(404).json({success:false, result:"User not found"})
    }
    else{
        if(password!==beneficiary.password){
            return res.status(403).json({success:false, result:"Incorrect Password"})
        }
        else{
            const user= await userModel.findById(beneficiary.owner)
            const token= await jwt.sign({id:user._id, isBeneficiary:true},process.env.jwt_pass)
            return res.status(200).json({success:true, result:token})
        }
    }
    
} catch (error) {
    next(createCustomError(error.message))
}
}
export default beneficiaryLogin