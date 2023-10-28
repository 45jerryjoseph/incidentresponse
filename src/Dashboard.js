import React, { useContext, useEffect, useState } from 'react'
import './dashboard.scss'
import { AuthContext } from './AuthContext';
import axios from 'axios';
import CustomizedTables from './Table';


export const Dashboard = () => {
    const [showReportForm, setShowReportForm] = useState(false);
    const [showTicketStatusForm, setShowTicketStatusForm] = useState(false);
    const [incidentForm, setIncidentForm] = useState({
      affectedPerson: '',
      incidentType: '',
      country: '',
      phoneNumber: '',
    });
    const [ticketIdInput, setTicketIdInput] = useState('');
    const [ticketStatus, setTicketStatus] = useState('');
  
    const handleChange = (e) => {
      setIncidentForm({ ...incidentForm, [e.target.name]: e.target.value });
    };
  
    const handleTicketIdChange = (e) => {
      setTicketIdInput(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      // For simplicity, we'll assume success.
      const ticketId = Math.floor(100000000000 + Math.random() * 900000000000);
      alert(`Here is your ticket ID: ${ticketId}. Please save it.`);
      setShowReportForm(false);
    };
  
    const handleTicketStatusSubmit = (e) => {
      e.preventDefault();
      // Just a mock to simulate checking a ticket status.
      if (ticketIdInput) {
        setTicketStatus('Your ticket is in progress.');
      }
    };
  
    return (
      <div className="dashboard">
        <p>Welcome to the cybersecurity incident response page. Here you can report cybercrime and related incidents.</p>
        
        <div className="buttons">
          <button onClick={() => setShowReportForm(true)}>Report an Incident</button>
          <button onClick={() => setShowTicketStatusForm(true)}>Check Ticket Status</button>
        </div>
        
        {showReportForm && (
          <form onSubmit={handleSubmit}>
            <input type="text" name="affectedPerson" placeholder="Enter Your name" onChange={handleChange} required />
            <select name="incidentType" onChange={handleChange} required>
              <option value="">Select incident type</option>
              <option value="ddos">DDoS Attack</option>
              <option value="ransomware">Ransomware</option>
              <option value="cyberbullying">Cyberbullying</option>
              <option value="proofOfCompromise">Proof of Compromise</option>
              <option value="other">Other</option>
            </select>
            <select name="country" onChange={handleChange} required>
              <option value="">Select Country</option>
              <option value="country1">Kenya</option>
              <option value="country2">Uganda</option>
              <option value="country3">Tanzania</option>
              <option value="country4">Rwanda</option>
            </select>
            <input type="county" name="county" placeholder="County or province" onChange={handleChange} required />
            <input type="tel" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required />
            <input type="checkbox" id="terms" name="terms" required />
            <label htmlFor="terms">
              I agree to the <a href="/Privacy">terms and privacy policy</a>
            </label>
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setShowReportForm(false)}>Cancel</button>
          </form>
        )}
  
        {showTicketStatusForm && (
          <form onSubmit={handleTicketStatusSubmit}>
            <input type="text" placeholder="Enter Ticket ID" value={ticketIdInput} onChange={handleTicketIdChange} required />
            <button type="submit">Check Status</button>
            <button type="button" onClick={() => setShowTicketStatusForm(false)}>Cancel</button>
            <div>{ticketStatus}</div>
          </form>
        )}
      </div>
    );
  };
  


// import { useNavigate } from 'react-router-dom';
// export const Dashboard = () => {
//     // const {user, dispatch} = useContext(AuthContext);
//     const user ="jj"
//     const {FirstName,LastName, Email } = user
//     const [users, setUsers] = useState([]);
//     const navigate = useNavigate();
//     // console.log(users[0].FirstName);
//     useEffect(()=>{
//         const getList = async () => {
//             try {
//                 const res = await axios.get(`/users/`);
//                 setUsers(res.data);
//                 console.log(res.data)
//             } catch (err) {
//                 console.log(err);
//             }
//         }

//         getList();
//     },[])

//     // const handleLogout = () =>{
//     //     dispatch({type: "LOGOUT"})
//     //     navigate('/');
//     // }
//     return (
//         <>
//             <div className="container">
//             <div className="panel panel-default">
//                 <div className="logout">
//                     {/* <button style={{}} onClick={handleLogout}>Log Out</button> */}
//                 </div>
//                 <div className="panel-heading">
//                     <h1 style={{color: "blueviolet"}}>{Email}</h1>
//                     <h2>Welcome <p style={{color:"red"}}>{FirstName}  {LastName} </p> this has been a successfull Login.</h2>
//                     <h3>This is the official cybercrime reporting page. Here yo can report cybersecurity related incidents and get an expert to follow up on the evnt to help you resolve the incident.</h3>
//                 </div>
//                 <h1>You can also associate with:</h1>
                
//             </div>
//         </div>
//         <CustomizedTables users={users}/>
// </>
//   )
// }

