import { Router } from "express";
import { verifyToken } from "../users/controllers/Verify.js";
import addBeneficiary from "./controllers/addBeneficiary.js";
import beneficiaryLogin from "./controllers/beneficiaryLogin.js";
import getMyBeneficiaries from "./controllers/getMyBeneficiaries.js";
import deleteBeneficiary from "./controllers/DeleteBenenficiary.js";

const beneficiaryRoute= Router()
beneficiaryRoute.post("/new", verifyToken, addBeneficiary)
beneficiaryRoute.post("/login",  beneficiaryLogin)
beneficiaryRoute.post("/mine",verifyToken,  getMyBeneficiaries)
beneficiaryRoute.post("/delete",verifyToken,  deleteBeneficiary)



export default beneficiaryRoute