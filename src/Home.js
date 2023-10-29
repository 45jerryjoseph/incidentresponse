import React from 'react'
import { Link } from 'react-router-dom'
import "./home.scss"
const Home = () => {
  return (
    <div className="home">
     <header className="App-header">
       <img  className="App-logo" alt="" />
       <div className="tabs">
         {/* implement  */}
         <Link to={"/login"}>
             <button style={{margin: "0 20px",
    padding: "10px",
    borderRadius: "8px",
    }}>Login</button> 
         </Link>
         <Link to={"/signup"}>
            <button style={{margin: "0 20px",
    padding: "10px",
    borderRadius: "8px",
    }}>sign Up</button>
         </Link>
       </div>
     </header>
     <body>
       <section>
         <div>
           <p style={{display:'flex',color:"white",fontSize:"4rem"}}>This is an Incident Response App</p>
           <p style={{display:'flex',color:"white",fontSize:"3rem"}}>Report your incident</p>
         </div>
       </section>
     </body>
   </div>
  )
}

export default Home