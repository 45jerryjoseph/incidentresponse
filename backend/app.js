import express from 'express';
import dotenv from "dotenv";
import sqlite3 from 'sqlite3';
import usersRoute from "./routes/users.js";
import authRoute from "./routes/auth.js"
import verifyRoute from "./routes/verify.js"
import cors from 'cors'



//configuring dotenv
dotenv.config();

const app = express();
app.use(express.json())
app.use(cors())
const connect = async() => {
    try {
        let db = new sqlite3.Database('/home/c0d3x/THEEGOATS/incidentresponse/backend/db/users.db', (err) => {
            if (err) {
                return console.error(err.message);

            }
            console.log("Connected to the in-memory Sqlite database");
        });
    } catch (error){
        console.log("Connection Failure");

    }
}
app.use("/api/users",usersRoute);
app.use("/api/auth",authRoute);
// It is possible to implement the verify but since the email is not uniq
// in database we cannot select by ID
app.use("/auth/verify",verifyRoute);

app.listen(8080, () => {
    connect();
    console.log("Connected to backend")
});
