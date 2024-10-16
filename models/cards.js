// cardNumber: Unique card number (String, unique).
// cardType: Type of card (e.g., credit, debit) (String).
// expiryDate: Expiration date of the card (Date).
// CVV: Card security code (String).
// owner: Reference to User model (ObjectId).
// linkedAccount: Reference to the linked Account model (ObjectId).
// createdAt: Card issuance date (Date, default: now).
// status: Card status (e.g., active, blocked) (String, default: "active").

import {Schema,model} from "mongoose"
const  cardSchema=Schema({
    cardNumber:{
        type:String,
        unique :true,
        required:true,
        length:16
    },
    cardType:{
        type:String,
        enum:["credit", "debit"],
        default:"debit"
    },
    expiryDate:{
        type:Date,
        required:true,
    },
    cvv:{
        type:String,
        required:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"users"
    },
    linkedAccount:{
        type:Schema.Types.ObjectId,
        ref:"accounts",
        required:true
    },
    status:{
        type:String,
        enum:["active", "blocked"],
        default:"active"
    },
    pin:{
        type:String,

    }
    
}, {timestamps:true})
const cardModel=model("cards",cardSchema)
export default cardModel