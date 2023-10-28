import React, { useContext, useEffect, useState } from 'react'
import './dashboard.scss'
import { AuthContext } from './AuthContext';
import axios from 'axios';
import CustomizedTables from './Table';
import { useNavigate } from 'react-router-dom';
export const Dashboard = () => {
    const {user, dispatch} = useContext(AuthContext);
    const {FirstName,LastName, Email } = user
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    // console.log(users[0].FirstName);
    useEffect(()=>{
        const getList = async () => {
            try {
                const res = await axios.get(`/users/`);
                setUsers(res.data);
                console.log(res.data)
            } catch (err) {
                console.log(err);
            }
        }

        getList();
    },[])

    const handleLogout = () =>{
        dispatch({type: "LOGOUT"})
        navigate('/');
    }
    return (
        <>
            <div className="container">
            <div className="panel panel-default">
                <div className="logout">
                    <button style={{}} onClick={handleLogout}>Log Out</button>
                </div>
                <div className="panel-heading">
                    <h1 style={{color: "blueviolet"}}>{Email}</h1>
                    <h2>Welcome <p style={{color:"red"}}>{FirstName}  {LastName} </p> this has been a successfull Login.</h2>
                    <h3>Here is your Dashboard</h3>
                </div>
                <h1>You can also associate with:</h1>
                
            </div>
        </div>
        <CustomizedTables users={users}/>
</>
  )
}

