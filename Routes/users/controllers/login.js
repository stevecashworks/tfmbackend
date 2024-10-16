import jwt from "jsonwebtoken"
import userModel from "../../../models/users.js"
import {config} from "dotenv"
import createCustomError from "../../../createCustomError.js"
config()


const login=async(req,res,next)=>{
    try{
         const {email, password}= req.body
            const thisUser= await userModel.findOne({email})
            if(!thisUser){
                 return res.status(404).json({success
                    :false, result:"There is no user with this email"
                 })
            }
            else{
                const db_password= thisUser.password
                
                if(db_password===password){
                     const token= await jwt.sign({id:thisUser._id, role:thisUser.role, account:thisUser.account},process.env.jwt_pass);
                     return res.status(200).json({success:true, result:token})
                }
                else{
                    return res.status(403).json({success:false,result:"Incorrect password"});
                }
            }

    }catch(err){
     next(createCustomError(err.message))
    }
}
export  default login