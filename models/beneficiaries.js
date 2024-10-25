import {Schema, model} from "mongoose"

const beneficiarySchema=Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        
    

    }, owner:{
        type:Schema.Types.ObjectId,
        ref:"users"
    }
})
const beneficiaryModel=model("beneficiaries",beneficiarySchema)
export default beneficiaryModel