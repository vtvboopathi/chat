import React from 'react'

const Login = () => {
  return (
    <div className='form'>
      <div className='wrap'>
        <span className='logo'>WhatsApp</span>
        <span className='title'>Log in</span>
        <form>
          <input type="email" placeholder='Your email...' name="" id="" />
          <input type="password" placeholder='Password' name="" id="" />
          <button>Sign In</button>
        </form>
        <p>Don't you have an account? <span>Signup</span></p>
      </div>
    </div>
  )
}

export default Login