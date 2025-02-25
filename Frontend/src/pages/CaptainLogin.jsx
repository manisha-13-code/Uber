import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'


const CaptainLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const {captain, setCaptain} = useContext(CaptainDataContext)
    const submitHandler = async (e) => {
      e.preventDefault()
      const captainData =  {
        email: email,
        password: password
      } 

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData)

      if(response.status === 200) {
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
      }

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
        <p className='text-center mt-5'>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a captain</Link></p>
      </div>
      <div>
        <Link to='/login' className='bg-[#d56211] flex items-center justify-center mb-5 text-white rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin
