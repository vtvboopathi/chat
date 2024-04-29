import React from 'react'
import { FiUpload } from "react-icons/fi";

const Register = () => {
  return (
    <div className='form'>
      <div className='wrap'>
        <span className='logo'>WhatsApp</span>
        <span className='title'>Create User</span>
        <form>
          <input type="text" placeholder='Your name here...' name="" id="" />
          <input type="email" placeholder='Your email...' name="" id="" />
          <input type="password" placeholder='Password' name="" id="" />
          <label htmlFor='photo'><FiUpload /> <span>Upload your image</span></label>
          <input type="file" name="" id="photo" style={{display:'none'}}/>
          <button>Sign Up</button>
        </form>
        <p>Already have an account? <span>Login</span></p>
      </div>
    </div>
  )
}

export default Register