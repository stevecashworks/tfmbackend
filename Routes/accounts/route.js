import {Router} from "express"
import createAccount from "./controllers/createAccount.js"
import {verifyAdmin, verifyToken} from "../users/controllers/Verify.js"
import editAccount from "./controllers/editAccount.js"
import getAllAccounts from "./controllers/getAllAccounts.js"
import getAccount from "./controllers/getAccount.js"
import getByNumber from "./controllers/getByNumber.js"
const accountRoute= Router()


accountRoute.post("/new",verifyToken, createAccount)
accountRoute.post("/edit/:id",verifyAdmin, editAccount)
accountRoute.post("/all",verifyToken, getAllAccounts)
accountRoute.post("/:id",verifyAdmin, getAccount)
accountRoute.post("/n/:number", getByNumber)


export default  accountRoute