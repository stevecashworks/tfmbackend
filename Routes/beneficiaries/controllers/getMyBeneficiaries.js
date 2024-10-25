import createCustomError from "../../../createCustomError.js"
import userModel from "../../../models/users.js"

const getMyBeneficiaries= async(req,res,next)=>{
try {
    const  {id}= req.user
    const   thisUser= await userModel.findById(id).populate("beneficiaries")
    const beneficiaries=  thisUser.beneficiaries.map(x=>x.email)

    return res.status(200). json({success:true, result:beneficiaries})

    
} catch (error) {
    console.log(error.message)
    next(createCustomError(error.message))
}
}

export default getMyBeneficiaries