import createCustomError from "../../../createCustomError.js"
import userModel from "../../../models/users.js"


const getSingleUser=async(req,res,next)=>{
    try {
        const thisUser= await userModel.findById(req.params.id)
        if(!thisUser){

            return res.status(404).json({success:false, result:"user was not found"})
        }
        return res.status(200).json({success:true, result:thisUser})
    } catch (error) {
        next(createCustomError(error.message))
    }
}
export default getSingleUser