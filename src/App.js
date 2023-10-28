
import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';
import { Login } from './Login';

function App() {
  // const user = false;
  // const [user, setUser] = useState(true);
  const {user} = useContext(AuthContext);
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <body>
        <BrowserRouter>
          <Routes>
            {
              user ? (
                <>
                  
                </>
              ): (
                <>
                  <Route path='/login' element ={<Login/>} />
                  <Route path='/' element ={<Login/>} />
                </>
              )
            }
          </Routes>
        </BrowserRouter>
        {/* <Signup /> */}
        {/* <Login /> */}
      </body>
    </div>
  );
}

export default App;
