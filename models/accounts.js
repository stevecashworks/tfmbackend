// accountNumber: Unique account number (String, unique).
// accountType: Type of account (e.g., savings, checking) (String).
// balance: Current balance (Number, default: 0).
// currency: Currency type (e.g., USD, EUR) (String, default: "USD").
// owner: Reference to User model (ObjectId).
// createdAt: Account creation date (Date, default: now).
// transactions: Array of references to Transaction model (Array of ObjectIds).
// isActive: Account status (Boolean, default: true).
import {Schema, model} from "mongoose"

const accountSchema=Schema({
 accountNumber:{
    type:String,
    required:true, 
    unique :true
 },
 accountType:{
   type:String,
    enum:["savings", "current", "checkings"],
    default:"savings",
    required:true,
    
 },
 balance:{
    type:Number,
    default:0
 },
 currency:{
    type:String,
    required:true,
    default:"USD"
 },

owner:{
    type:Schema.Types.ObjectId,
    ref:"users"
},
transactions:[{type:Schema.Types.ObjectId, ref:"transactions"}],
isActive:{
    type:Boolean,
    default:true
}

}, {timestamps:true})
const accountModel=model("accounts", accountSchema)
export default accountModel
