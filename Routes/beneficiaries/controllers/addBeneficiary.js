import createCustomError from "../../../createCustomError.js";
import generatePassword from  "../../../generatePassword.js"
import beneficiaryModel from "../../../models/beneficiaries.js";
import userModel from "../../../models/users.js";

const addBeneficiary = async (req, res, next) => {
    try {
      const { email, name } = req.body;
      const { id } = req.user;
      const password = generatePassword(6);
      console.log({ password });
      const loginLink = 'http://localhost:3000/';
  
      const newBeneficiary = await beneficiaryModel.create({ password, email, owner: id });
  
      const updatedUser = await userModel.findByIdAndUpdate(id, { $push: { beneficiaries: newBeneficiary } });
      
      const message =
        "We are excited to inform you that you were added by " +
        updatedUser.fullName +
        " as a beneficiary to an account. Your login details are as follows:<br/>" +
        "Email: " + email + "<br/>" +
        "<strong>Password: " + password + "</strong>" +
        "<br/>" +
        `<a href="${loginLink}" style="display: inline-block; padding: 15px 30px; font-size: 16px; color: #fff; background-color: #007BFF; text-align: center; text-decoration: none; border-radius: 5px;">Login</a>`;
  
      sendMail(email, name, message);
      return res.status(200).json({ success: true, result: "Beneficiary added successfully" });
    } catch (error) {
      console.log(error.message);
      next(createCustomError(error.message));
    }
  };
  
  export default addBeneficiary;
  