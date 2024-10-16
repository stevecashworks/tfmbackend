import {createTransport} from "nodemailer"
import {config}  from "dotenv"
import createHTMLTemplate from "./createHTMLTemplate.js";
config()
const  transporter=createTransport({
service:"gmail",
auth:{
    pass:process.env.mail_secret,
    user:"tfmbank1@gmail.com"
}
})
const mailOptions = {
    from: 'tfmbank1@gmail.com',
    to: 'chigbustephennamdi@gmail.com',
    subject: 'Welcome to Our Company!',
    html: createHTMLTemplate({name:"Stephen", message:""}),
   
};


const sendMail=async()=>{
     await transporter.sendMail(mailOptions, (err,message)=>{
        if(err){
            console.log(err.message)
        }
        else{
            console.log("message sent successfully")
        }
    })
}

export default sendMail