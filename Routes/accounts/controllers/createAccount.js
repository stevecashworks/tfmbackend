import accountModel from "../../../models/accounts.js"
import userModel from "../../../models/users.js";

const createAccount=async(req,res,next)=>{
try {
    const userId= req.user.id
    if(!userId){
        return res.status(404).json({success:true, result:"User verification failed"});

    }
    else{
        const newAccount= await accountModel.create(req.body)
        if(newAccount){
            const  updatedUser=await userModel.findByIdAndUpdate(userId,{$push:{accounts:newAccount}},{new:true})
        }
    }
} catch (error) {
    next(createCustomError(error.message))
}

}



export default createAccount