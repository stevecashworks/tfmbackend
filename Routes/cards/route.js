import {Router} from "express"
import { verifyToken } from "../users/controllers/Verify.js"
import createCard from "./controllers/createCard.js"
const cardsRoute= Router()

cardsRoute.post("/new", verifyToken, createCard)

export default cardsRoute