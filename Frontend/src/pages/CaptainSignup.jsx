import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const CaptainSignup = () => {
  const navigate = useNavigate()
   const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})

    const [vehicleColor, setVehicleColor] = useState('')
    const [veiclePlate, setVehiclePlate] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehicleType, setVehicleType] = useState('')
    
    const { captain, setCaptain } = useContext(CaptainDataContext);
    const submitHandler = async (e) => {
      e.preventDefault()
      
      const captainData = {
        fullname: {
          firstname: firstName,
          lastname: lastName
        },
        email: email,
        password: password,
        vehicle: {
          color: vehicleColor,
          plate: veiclePlate,
          capacity: vehicleCapacity,
          type: vehicleType
        }
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/signup`, captainData)

      if(response.status === 201) {
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('captain', data.token)
        navigate('/captain-home')

      }
      setEmail('')
      setFirstName('')
      setLastName('')
      setPassword('')
      setVehicleColor('')
      setVehiclePlate('')
      setVehicleCapacity('')
      setVehicleType('')
    }
  return (
    <div className='px-5 py-5 h-screen flex flex-col justify-between'>
    <div>
    <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <h3 className='tex-lg font-medium mb-2'>What's our Captain's name</h3>
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

          <h3 className='tex-base font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4'>
            <input
              className='bg-[#eeeeee] mb-5 w-1/2 rounded px-4 py-2 text-base placeholder:text-sm'
              type="text"
              required
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              className='bg-[#eeeeee] mb-5 w-1/2 rounded px-4 py-2 text-base placeholder:text-sm'
              type="text"
              required
              placeholder='Vehicle Plate'
              value={veiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4'>
            <input
              className='bg-[#eeeeee] mb-5 w-1/2 rounded px-4 py-2 text-base placeholder:text-sm'
              type="text"
              required
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              className='bg-[#eeeeee] mb-7 w-1/2 rounded px-4 py-2 text-base placeholder:text-sm'
              type="text"
              required
              placeholder='Vehicle Type'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>
        <button className='bg-black text-white rounded px-4 py-2 w-full text-lg placeholder:text-base'>Create Captain Account</button>
      </form>
      <p className='text-center mt-5'>Already have a account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
    </div>
    <div>
      <p className='text-[6px]'>This site is protected by reCAPTCHA and the <span className='underline font-bold'>Google Privacy Policy</span> and <span className='underline font-bold'>Terms of Services apply</span>
      </p>
    </div>
  </div>
  )
}

export default CaptainSignup
