import   {Router} from "express"
import register from "./controllers/register.js"
import login from "./controllers/login.js"
import { verifyToken, verifyAdmin } from "./controllers/Verify.js"
import loginWithToken from "./controllers/loginWithToken.js"
import getAllUsers from "./controllers/ViewAllUsers.js"
import editUser from "./controllers/editUser.js"
import getUser from "./controllers/getUser.js"

const userRoute=Router()

userRoute.post("/register", register)
userRoute.post("/login", login)
userRoute.post("/logtk",verifyToken, loginWithToken )
userRoute.post("/all", verifyToken, getAllUsers)
userRoute.post("/edit/:id", verifyAdmin, editUser)
userRoute.post("/:id", verifyAdmin, getUser)



export default userRoute