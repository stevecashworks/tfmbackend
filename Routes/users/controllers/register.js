import  userModel from "../../../models/users.js"
import accountModel  from "../../../models/accounts.js"
import generateUniqueId from "../../accounts/controllers/generateUniqueId.js"
import jwt from "jsonwebtoken"
import {config} from "dotenv"
import createCustomError from "../../../createCustomError.js"
config()

const register=async(req,res,next)=>{
//  creates a user with one bank account
    console.log("registering")
    try{
const newUser= await userModel.create(req.body)
const account=await generateUniqueId(accountModel,10)

//  create   a new account as user signs in, others can be added later
const newAccount= await accountModel.create({
    accountNumber:account,
    owner:newUser._id
})


const updatedUser= await userModel.findByIdAndUpdate(newUser._id,{$set:{account:newAccount}}, {new:true})
const token= await jwt.sign({id:updatedUser._id, role:newUser.role,account:updatedUser.account},process.env.jwt_pass)
console.log(account)
console.log(token)
return res.status(200).json({success:true, result:token})
}
catch(err){
    next(createCustomError(err.message))
    
}
}

export default register