import sqlite3 from 'sqlite3';
import CryptoJS from 'crypto-js';
import { generateOTP } from '../services/Otp.js';
import { sendMail } from '../services/Mail.js';
const db = new sqlite3.Database('/home/c0d3x/THEEGOATS/incidentresponse/backend/db/users.db')

export const createUserOtp =  async (req,res) =>{
    console.log(req.query)
    // res.json({message:"Thanks"})
    const { email } = req.query;
    const otpGenerated = generateOTP();
    const sql = `INSERT INTO otps (Email,Otp) VALUES (?,?)`;
    db.run(sql,[email,otpGenerated], async(err)=>{
        if (err){
            console.log(err ,"1");
        } else {
            try {
                await sendMail({
                    email: email,
                    otp: otpGenerated
                })
                res.status(200).json({message: "Check your Email Adress for your Verification OTP" ,otpGenerated});
            } catch (err) {
                console.log("No email Found in Otps");
            }
            console.log({message: "User created to Otps Table"})
        }
    })
}


//Validating the user login Otp
export const validateUserLogin = async (email, otp) =>{
    try {
        const sql = `SELECT * FROM otps WHERE Email = ?`;
        db.get(sql,[email], (err, otpRow) => {
            if (err){
                console.log(err);
                return;
            }
            if (otpRow && otpRow.Otp !== otp){
                console.log("Invalid OTP");

            } else {
                console.log("Valid OTP")
                return otpRow
            }

        });
    } catch (err) {
        console.log(err)
    }
}
export const register = async(req,res) =>{
    const {firstname, lastname, email} = req.body;
    const encpassword = CryptoJS.AES.encrypt(req.body.password,process.env.encCode).toString();
    try {
        // checkEmailExists here
        const sql = `INSERT INTO users (FirstName, LastName, Email, Password) VALUES (?,?,?,?   )`;
        db.run(sql,[firstname,lastname,email,encpassword], (err)=>{
            if (err){
                // res.status(err.status).json(err.message);
                console.log(err)
            } else {
                res.status(201).json({message: "User created succesfully"});
            }
        }

        );
        // res.json(req.body)
    } catch (err) {
        console.log(err);
    }
}

export const login = async (req,res) => {
    const {email} = req.body;

    try {
        const sql = `SELECT * FROM users WHERE email = ?`;
        db.get(sql,[email], (error, row)=>{
            if (error){
                // res.
                console.error(error);
                // console.log("11")
                return;
            }

            if (row){
                const {Password,...otherDetails} = row;
                // console.log(row.Password)
                const bytes = CryptoJS.AES.decrypt(Password,process.env.encCode);
                // console.log(bytes)
                const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
                // console.log(originalPassword);
                // res.json(originalPassword);
                try {
                    if (originalPassword !== req.body.password ){
                        res.status(401).json({message :"Wrong password or Username"});
                    } else {
                        res.status(200).json({details :{...otherDetails}});
                    }
                    // originalPassword !== req.body.password && res.status(401).json("Wrong password or Username");
                    
                } catch (error) {
                    // console.log(error)
                    res.json({message: "Wrong password or Username"})
                }
                // console.log(`User password: ${Password}`)
                // res.status(200).json({details :{...otherDetails}});
            } else {
                console.log('user not found');

            }
        });



    } catch (err) {
        res.status(500).json(err)
        
    }
}