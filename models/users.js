// accounts: Array of references to Account model (Array of ObjectIds).
// createdAt: Account creation date (Date, default: now).
// updatedAt: Last update date (Date, default: now).
// role: Role of the user (e.g., customer, admin) (String, default: "customer").
// isVerified: Email/phone verification status (Boolean, default: false)
import  {Schema, SchemaType, model} from "mongoose";

const userSchema= new Schema({
    firstName:{
       type: String,
       required:true,
    },
    lastName:{
    type:    String,
    required:true
    },
    fullName:{
        type:String,
        required:true,},
    password:{
         type:String,
        required:true},
    address:{
        type:String,
        required:true,},
    email:{
        type:String,
        unique:true,
        required:true
    },
    SSN:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },

    pin:{
        type:String,
        maxLength:6,
        required:true,

    },
    phone:{
        type:String,
        unique:true,
        required:true
    },
    dateOfBirth:{
       type: Date, 
       required:true
    },
    role:{
        type:String,
        enum:["user", "admin"],
        default:"user"
    },
    cards:[{
        type:Schema.Types.ObjectId,
        ref:"cards",
        default:[]
    }],
	userImg:{
		type:String,
		required:true
		},
		idImg:{
			type:String,
			required:true
		},
        beneficiaries:[{type:Schema.Types.ObjectId, ref:"beneficiaries"}],
    account:{type:Schema.Types.ObjectId, ref:"accounts"},
    isVerified:{
        type:Boolean,
        default:false
    },
    

}, {timestamps:true})

const userModel= model("users", userSchema)

export default userModel
