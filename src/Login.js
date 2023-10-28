import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';
import './login.scss';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';

export const Login = () => {

  // const [lcredentials,setLcredentials] = useState({
  //   email:undefined,
  //   password:undefined
  // });
  // const handleChange = (e) =>{
  //   setLcredentials((prev) => ({...prev, [e.target.id] : e.target.value}));
  // }
  const [email, setEmail] = useState(undefined);
  const [password, setPassword]   = useState(undefined);
  const [message, setMessage] = useState("");
  const [otpvalue, setOtpvalue] = useState("");
  const [otpgen, setOtpgen] = useState("");
  const [verify,setVerify] = useState(false);
  const [disable, setDisable] = useState(false);
  const [color, setColor] = useState('green')
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const email = e.target.value;
    // Here we are validating based on regular expression eg:
    //const isEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    if (validator.isEmail(email)) {
      setEmail(email);
      setMessage("Valid Email");
    } else {
      setMessage("Invalid Email 📩.Make Changes");
    }

  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleOtpChange = (e) =>{
    setOtpvalue(e.target.value);
  }
  const {loading, error, dispatch} = useContext(AuthContext);
  const handleSubmit = async (e) =>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try {
      // const res = await axios.post(`/auth/login`,lcredentials);
      const res = await axios.post(`/auth/login`,{email, password});
      dispatch({type: "LOGIN_SUCESS", payload: res.data.details});
      navigate("/dashboard");
      console.log(res.data.details);
      // setMessage(res.data.message)
    } catch (err) {
      dispatch({type : "LOGIN_FAILURE" , payload:err.response.data});
      setMessage(err.response.data.message);
      // console.log(err)
    }

  }
  const handleGetOtp = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.get(`/auth/generateOtp`, {params: { email }});
      setMessage(res.data.message);
      setOtpgen(res.data.otpGenerated);
      setVerify(true)
      // console.log(res.data);
    } catch (err) {
      console.log("Error Occured here",err)
      
    }
  }
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    try {
      if (otpvalue === otpgen){
        setDisable(true)
        setColor('lightgreen')
        setMessage("OTP is 💯 Correct ✔️. Proceed to Submit")
        // setVerify(tru)
      } else {
        setMessage("Confirm your OTP value")
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="login">
          <div className="bgImage">
            <div className="formWrap">
              <p>Login</p>
              <input type="email" className="email" id='email' placeholder="email" onChange={handleEmailChange}/>
              <input type="password" className="password" id='password' placeholder="password" onChange={handlePasswordChange} />
              <div className="otpContainer">
                <input type="text" name="otp" id="" placeholder='fill in otp' className='otp' onChange={handleOtpChange}/>
                {/* //when the otp code is equal to the one generated then get OTP button will be disabled */}
                {/* Set here Get Otp after click setChange of button to validate */}
                {
                  verify ? (
                    <button onClick={handleVerifyOtp} style={{backgroundColor: color, color :"whitesmoke", borderRadius: "20px"
                  }} disabled = {disable}> { disable === true ? (<>Valid</>):(<>Verify OTP</>)}</button>
                  ): (
                    <button onClick={handleGetOtp}>Get OTP</button>
                  )
                }
              </div>
              <button onClick={handleSubmit} className="submit" >SUBMIT </button>
            <div className="message" style={{color:"whitesmoke", background:"green", borderRadius:"12px"}}>{message}</div>
            </div>
          </div>
        
    </div>
  )
}

