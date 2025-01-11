import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Usersignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})
  const submitHandler = (e) => {
    e.preventDefault()
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    })
    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className='tex-lg font-medium mb-2'>What's your name</h3>
          <div className='flex gap-4'>
            <input
              className='bg-[#eeeeee] mb-5 w-1/2 rounded px-4 py-2 text-base placeholder:text-sm'
              type="text"
              required
              placeholder='First name'
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
            />

            <input
              className='bg-[#eeeeee] mb-5 w-1/2 rounded px-4 py-2 text-base placeholder:text-sm'
              type="text"
              required
              placeholder='Last name'
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value)
              }}
            />
          </div>
          <h3 className='tex-base font-medium mb-2'>What's your email</h3>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-base placeholder:text-sm'
            type="email"
            required
            placeholder='email@example.com'
          />
          <h3 className='tex-base font-medium mb-2'>Enter password</h3>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'
            type="password"
            required
            placeholder='password' />
          <button className='bg-black text-white rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>
        </form>
        <p className='text-center mt-5'>Already have a account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
      </div>
      <div>
        <p className='text-[6px]'>This site is protected by reCAPTCHA and the <span className='underline font-bold'>Google Privacy Policy</span> and <span className='underline font-bold'>Terms of Services apply</span>
        </p>
      </div>
    </div>
  )
}

export default Usersignup
