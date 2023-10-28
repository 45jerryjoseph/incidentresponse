import React, { useContext, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';
import './signup.scss'
export const Signup = () => {
  const [credentials, setCredentials] = useState({
    firstname:undefined,
    lastname:undefined,
    email:undefined,
    password: undefined
  });
  const [otp,setOtp] =useState();
  const navigate = useNavigate();
  const handleChange = (e) =>{
    setCredentials((prev) => ({...prev,[e.target.id] : e.target.value}));
  }
  const handleClick = async(e) => {
    e.preventDefault();
    try {
      // execute this request below only when OTP inserted === OTP generated
      const res = await axios.post('/auth/register',credentials);
      console.log(res);
      // setUser(true)
      navigate(`/login`);
    } catch (err) {
      console.log(err.message)
    }
  }
  return (
    <div className="signup">
        <div>
          <div className="bgImage">
            <div className="formWrap">
              <p>New User Sign-up</p>
              <input type="text" className="firstname" placeholder="firstname" id='firstname' onChange={handleChange}/>
              <input type="text" className="lastname" placeholder="lastname" id='lastname' onChange={handleChange}/>
              <input type="email" className="email" placeholder="email" id='email' onChange={handleChange}/>
              <input type="password" className="password" placeholder="password" id='password' onChange={handleChange}/>
              {/* <div className="otpContainer">
                <input type="text" name="otp" id="" placeholder='fill in otp' className='otp' required/>
                <button type="submit">Get OTP</button>
              </div> */}
              <button className="submit"  onClick={handleClick}>SUBMIT </button>
            <p>Already have an account? <strong> <Link to={"/login"}> Login here </Link></strong></p>
            </div>
          </div>
        </div>

    </div>

  )
}

