import jwt from "jsonwebtoken";
import {config} from "dotenv"
config()
const secret= process.env.jwt_pass
export const  verifyToken= async(req,res,next)=>{
    try{

        const {token}= req.headers
        await jwt.verify(token, secret, (err,user)=>{
            if(err){
                return res.status(500).json({success:false, result:err.message})
            }else{
                req.user=user;
                next()
            }
        })
    }catch(err){
        return res.status(500).json({success:true, reresult:err.message})
    }

}

export const verifyAdmin=async(req,res,next)=>{
    try {
        const {token}=req.headers

        await  jwt.verify(token, secret, (err,user)=>{
            if(err){
                return res.status(500).json({success:false,result:err.message})
            }else{
                if(!(user.role==="admin")){
                    return  res.status(403).json({success:false, result:'Only users with admin priviledges can proceed'})
                }
                else{
                    req.user=user;
                    next()
                }
            }
        })
    } catch (error) {
        return res.status(500).json({success:true, result:err.message})
    
    }
}