import { validateUserLogin } from "./auth.js";

const verifyEmail = async (req, res, next) =>{
    const {email, otp} = req.body;
    try {
        const user = await validateUserLogin(email, otp);
        res.status(200).json(user);
    } catch (err) {
        console.log("Invalid Email")
    }
    next()
}
export default verifyEmail;