import React from 'react'
import './CSS/LoginSignUp.css'
import email from './Assets/email.png';
import lock from './Assets/lock.png';
import person from './Assets/person.png';

const LoginSignUp = () => {

  const [action,setAction] = React.useState('Sign Up');

  return (
    <div className = 'container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={person} alt="Person" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input">
          <img src={email} alt="Email" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={lock} alt="Lock" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="forgot-password">Forgot Password? <span>Click here</span></div>
        <div className="submit-container">
          <div className={action==="Login" ? "submit gray" : "submit"}>Sign Up</div>
          <div className={action==="Sign Up" ? "submit gray" : "submit"}>Login</div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp
