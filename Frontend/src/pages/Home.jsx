import React, { useState } from 'react'

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault();
  }
  return (
    <div className='h-screen relative'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"/>

      <div className='h-screen w-screen'>
      <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className=' flex flex-col justify-end h-screen absolute bottom-0 w-full p-5'>
        <div className='h-[30%] p-5 bg-white relative'>
        <h4 className='text-2xl font-bold'>Find a trip</h4>
        <form onSubmit={(e)=> {
          submitHandler(e)
        }}>
          <div className="line absolute h-16 w-1 top-[45%] left-10 rounded-full bg-gray-900"></div>
          <input
          onClick={()=> {
            setPanelOpen(true)
          }}
          value={pickup}
          onChange={(e)=> {
            setPickup(e.target.value);
          }}
           className='bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-4' type="text" placeholder='Add a pick-up loaction'/>
          <input
          value={destination}
          onChange={(e)=> {
            setDestination(e.target.value);
          }}
           className='bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-3' type="text" placeholder='Enter your destination' />
        </form> 
        </div>
        <div className='h-[0] bg-red-500'>
        </div>
      </div>
    </div>
  )
}

export default Home
