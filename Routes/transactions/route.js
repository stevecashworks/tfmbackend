import {Router} from "express"
import getAllTransactions from "./controllers/getAllTransactions.js"
import {verifyAdmin, verifyToken} from "../users/controllers/Verify.js"
import transfer from "./controllers/transfer.js"
import getTransaction from "./controllers/getTtansaction.js"
import getByAccount from "./controllers/getByAccount.js"
const transactionsRoute= Router()

transactionsRoute.post("/all",verifyToken, getAllTransactions)
transactionsRoute.post("/transaction/:id",verifyAdmin,getTransaction);
transactionsRoute.post("/transfer",verifyToken,transfer)
transactionsRoute.post("/getbyaccount", getByAccount)


export default transactionsRoute