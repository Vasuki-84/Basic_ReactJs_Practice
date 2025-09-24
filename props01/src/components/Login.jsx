import React from 'react'
import Button from './Button'

function Login() {
  return (
    <div>
        <h1>Login Form</h1>
        <input type='email' placeholder='Enter your email'/>
        <input type='password' placeholder='*****'/>
        <Button label= "Login" />



    </div>
  )
}

export default Login