import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { history } from '..'
import './login.css'

const Login = (props) => {
  const url="https://64d617d7754d3e0f13619720.mockapi.io/users"
  const [data,setData] = useState({
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
    axios.get(url)
            .then((response) => {
              const obj = response.data;
              const find_user = obj.find(i => i.email === data.email);
              if(find_user.password===data.password){
                history.push("/subscription"); 
                window.location.reload();
              }
            });
  }
  return (
    <div className="login-container">
      <Helmet>
        <title>Login</title>
        <meta property="og:title" content="Login" />
      </Helmet>
      <div className="login-container1">
        <span className="login-text">Login to your account</span>
        <span className="login-text1">Password</span>
        <input
          onChange={(e)=>handle(e)}
          type="password"
          placeholder="Password"
          className="login-textinput input"
        />
        <span className="login-text2">Email</span>
        <input
          onChange={(e)=>handle(e)}
          type="email"
          placeholder="Email Address"
          className="login-textinput1 input"
        />
        <input type="checkbox" className="login-checkbox" />
        <span className="login-text3">Remember Me</span>
        <button onClick={(e)=>submit(e)} type="button" className="login-button button">
          Login
        </button>
        <span className="login-text4">New to MyApp?</span>
        <Link to="/" className="login-navlink">
          Sign Up
        </Link>
      </div>
    </div>
  )
}

export default Login
