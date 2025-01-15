import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const CaptainLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData] = useState({})
    const submitHandler = (e) => {
      e.preventDefault()
      setCaptainData({ email, password })
      console.log(userData)
      setEmail('')
      setPassword('')
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form onSubmit={(e)=> {
          submitHandler(e)
        }}>
          <h3 className='tex-lg font-medium mb-2'>What's your email</h3>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
            type="email"
            required
            placeholder='email@example.com' />
          <h3 className='tex-lg font-medium mb-2'>Enter password</h3>
          <input
           value={password}
           onChange={(e) => {
             setPassword(e.target.value)
           }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
            type="password"
            required
            placeholder='password' />
          <button className='bg-black text-white rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>
        </form>
        <p className='text-center mt-5'>Join a fleet? <Link to='/capatin-signup' className='text-blue-600'>Register as a captain</Link></p>
      </div>
      <div>
        <Link to='/login' className='bg-[#d56211] flex items-center justify-center mb-5 text-white rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin
