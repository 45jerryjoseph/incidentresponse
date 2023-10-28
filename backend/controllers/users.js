import sqlite3  from 'sqlite3';
const db = new sqlite3.Database("/home/c0d3x/THEEGOATS/incidentresponse/backend/db/users.db");


export const getUsers = async(req,res) => {
    try {
        await db.all(
            `SELECT * FROM users;`, (err,rows) => {
                try {
                    // rows.forEach(
                    //     row => {
                    //         console.log(row);
                            
                    //     }
                    // );
                    // res.send(rows);
                    res.status(200).json(rows);

                } catch (err) {
                    console.log(err);
                }
            
            }
        )
        // db.close();
    } catch (error) {
        console.log(error)
    }
}