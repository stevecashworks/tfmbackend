import cardModel from "../../../models/cards.js";
import createCustomError from "../../../createCustomError.js";
import userModel from "../../../models/users.js";
import generateUniqueId from "../../accounts/controllers/generateUniqueId.js";
const createCard=async(req,res,next)=>{
    try {
        const {id}= req.user;
        const cardNumber=await generateUniqueId(cardModel,16)
        console.log(cardNumber)
        const  newCard= await cardModel.create({...req.body, owner:id,cardNumber})
        const updatedUser= await userModel.findByIdAndUpdate(id,{$addToSet:{cards:newCard._id}})
        return res.status(200).json({success:true, result:newCard})
        
    } catch (error) {
        next(createCustomError(error.message))
    }
}

export default createCard