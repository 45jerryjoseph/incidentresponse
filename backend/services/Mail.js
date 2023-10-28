import nodemailer from 'nodemailer';
import dotenv from 'dotenv'
dotenv.config();
const transporter = nodemailer.createTransport({
    service: 'gmail',
    // secure: false,
    auth: {
        user: process.env.MAIL_EMAIL,
        pass: process.env.MAIL_PASSWORD,
        // user: "secc545@gmail.com",
        // pass: "iymyfujssnjmvggl",
    }
});

export const sendMail = async ({email, otp}) => {
    try {
        let info = await transporter.sendMail({
            from: "secc545@gmail.com",
            to: email,
            subject: 'Hello 👋',
            html: `
                <div
                        class="container"
                        style="max-width: 90%; margin: auto; padding-top: 20px"
                    >
                        <h2>Welcome to the 💯.</h2>
                        <h4>You are officially In ✔</h4>
                        <p style="margin-bottom: 30px;">Pleas enter the sign up OTP to get started</p>
                        <h1 style="font-size: 40px; letter-spacing: 2px; text-align:center;">${otp}</h1>
                </div>
            `
            
        });   
        return info; 
    } catch (err) {
        console.log(err)
        console.log("ERRor of Credentials AUTH")
        // return false
    }
}

