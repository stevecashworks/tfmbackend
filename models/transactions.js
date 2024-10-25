// transactionType: Type of transaction (e.g., deposit, withdrawal, transfer) (String).
// amount: Transaction amount (Number).
// currency: Currency type (e.g., USD, EUR) (String, default: "USD").
// fromAccount: Reference to the Account model for the sender (ObjectId, optional for deposits).
// toAccount: Reference to the Account model for the recipient (ObjectId, optional for withdrawals).
// timestamp: Transaction date and time (Date, default: now).
// description: Transaction description (String).
// status: Status of the transaction (e.g., pending, completed) (String, default: "completed").
import {model,now,Schema} from "mongoose"
const transactionSchema=Schema({
    transactionType:{
        type:String,
        enum:["debit", "credit"],
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    currency:{
        type:String,
        default:"USD",
        required:true,
        default:"USD"

    },
    from:{
        accountNumber:{
            type:String
        },
        userName:{
            type:String
        }

    },
    to:{
        accountNumber:{
            type:String
            
        },
        userName:{
            type:String
        }

    }, 
    
    time:{
        type:Date,
        default:now()
    },
    status:{
        type:String,
        default:"pending",
        enum:["pending","successful", "failed"]
    }
},{timestamps:true})

const transactionModel= model("transactions", transactionSchema)

export default transactionModel