import React, { useContext, useEffect, useState } from 'react'
import './dashboard.scss'
import { AuthContext } from './AuthContext';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import CustomizedTables from './Table';


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
            <input type="text" name="affectedPerson" placeholder="Affected person" onChange={handleChange} required />
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
              I agree to the <Link to={"/Privacy"}>terms and privacy policy</Link>
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
  




