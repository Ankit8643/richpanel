import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Helmet } from 'react-helmet'

import './sign-up.css'

const SignUp = (props) => {
  const url="https://64d617d7754d3e0f13619720.mockapi.io/users"
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })
  function handle(e){
    const newdata={...data}
    newdata[e.target.id]= e.target.value
    setData(newdata)
  }
  function submit(e){
    e.preventDefault();
    axios.post(url,{
      name: data.name,
      email: data.email,
      password: data.password
    })
    .then(res=>{
      console.log(res.data)
    })
  }
  return (
    <div className="sign-up-container">
      <Helmet>
        <title>Sign Up</title>
        <meta property="og:title" content="Sign Up" />
      </Helmet>
      <div className="sign-up-container1">
        <span className="sign-up-text">Create Account</span>
        <span className="sign-up-text1">Name</span>
        <input
          onChange={(e)=>handle(e)}
          type="text"
          placeholder="Full Name"
          className="sign-up-textinput input"
        />
        <span className="sign-up-text2">Password</span>
        <input
          onChange={(e)=>handle(e)}
          type="password"
          placeholder="Password"
          className="sign-up-textinput1 input"
        />
        <span className="sign-up-text3">Email</span>
        <input
          onChange={(e)=>handle(e)}
          type="email"
          placeholder="Email Address"
          className="sign-up-textinput2 input"
        />
        <input type="checkbox" className="sign-up-checkbox" />
        <span className="sign-up-text4">Remember Me</span>
        <button onClick={(e)=>submit(e)} type="button" className="sign-up-button button">
          Sign Up
        </button>
        <span className="sign-up-text5">Already have an account?</span>
        <Link to="/login" className="sign-up-navlink">
          Login
        </Link>
      </div>
    </div>
  )
}

export default SignUp
