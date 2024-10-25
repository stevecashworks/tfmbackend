import express from "express"
import {connect}  from "mongoose"
import {config} from "dotenv"
import sendSMS from "./sendSMS.js"

import cors from "cors"
import errorHandler from "./errorHandler.js"
import userRoute from "./Routes/users/route.js"
import accountRoute from "./Routes/accounts/route.js"
import transactionRoute from "./Routes/transactions/route.js"
import cardRoute from "./Routes/cards/route.js"
import accountModel from "./models/accounts.js"
import userModel from "./models/users.js"
import sendMail from "./sendMail.js"
import beneficiaryRoute from "./Routes/beneficiaries/route.js"
const app =express()
app.use(express.json())
app.use(cors())
const getAccounts=async()=>{
    try{
        // const accounts= await accountModel.updateMany({},{$set:{balance:600020000}})
       const accounts= await userModel.find()
        console.log(accounts)
    }
    catch(err){
        console.log(err.message)
    }
}
getAccounts()
const clearDB=async()=>{
    try{
        await  accountModel.deleteMany()
        await  userModel.deleteMany()
        console.log("Database was cleared successfully")
    }
    catch(err){
console.error(err.message)
    }
}
// clearDB()


config()
app.use("/users", userRoute)
app.use("/accounts",accountRoute)
app.use("/transactions",transactionRoute)
app.use("/cards", cardRoute)
app.use("/beneficiaries", beneficiaryRoute)
// sendMail()

app.use(errorHandler)
const   mongoUri= process.env.server_mongo
const port= process.env.PORT||7000

const start=async()=>{
try {
    await connect(mongoUri)
    app.listen(port, ()=>{console.log(`server is listening on port ${port}`)} )
} catch (error) {
    console.log(error.message)
}

}
start()