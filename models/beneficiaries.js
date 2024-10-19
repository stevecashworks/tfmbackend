import {Schema, model} from "mongoose"

const beneficiarySchema=Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true

    }
})
const beneficiaryModel=model("beneficiaries",beneficiarySchema)
export default beneficiaryModel
