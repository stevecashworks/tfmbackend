// user: Reference to User model (ObjectId).
// message: Notification message (String).
// type: Type of notification (e.g., transaction alert, security alert) (String).
// isRead: Whether the notification has been read (Boolean, default: false).
// createdAt: Date and time when the notification was sent (Date, default: now).
import {Schema,model} from "mongoose"

const notificationSchema=Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"users",
        required:true,

    },
    message:{
        type:String,
        required:true,
    },
    isRead:{
        type:Boolean,
        default:false
    }
    
}, {timestamps:true})
const  notificationModel=model("notifications",notificationSchema)
export default notificationModel 