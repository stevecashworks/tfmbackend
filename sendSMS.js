import AfricasTalking from "africastalking";
import { config } from "dotenv";
config()
const apiKey=process.env.africas_talking_secret
const africas_talking= AfricasTalking({
    username:"sandbox",
    apiKey

})

const  sendSMS=async(to)=>{
    try{
        const result= await  africas_talking.SMS.send({
            to,
            message:"how far, na me cashworks dev",
            from:"Tfmbank"
        })
        console.log(result)
    }catch(err){
        console.error(err)
    }
}

export default sendSMS