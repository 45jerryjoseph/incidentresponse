
import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';
import { Dashboard } from './Dashboard';
import { Login } from './Login';
import Signup from './signup';
import {Privacy} from './Privacy';
import {Terms} from './Terms';

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
                  <Route path='/dashboard' element ={<Dashboard/>} />
                  <Route path='/privacy' element ={<Privacy/>} />
                  <Route path='/terms' element ={<Terms/>} />
y
                </>
              ): (
                <>
                  <Route path='/' element ={<Signup/>} />
                  <Route path='/login' element ={<Login/>} />
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
