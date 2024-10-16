import createCustomError from "../../../createCustomError.js"
import  accountsModel from    "../../../models/accounts.js"


const getByNumber=async(req,res,next)=>{

    try{
        const {number}= req.params
        console.log({number})
       const  account=await   accountsModel.findOne({accountNumber:number}).populate("owner").exec()

       if(!account){
        return res.status(404).json({success:false, result:"No account found"})
       }
       else{
        return res.status(200).json({success:true,result:account.owner})
       }
    }
    catch(err){
        console.log(err.message)
        next(createCustomError(err.message))
    }
}
export  default getByNumber