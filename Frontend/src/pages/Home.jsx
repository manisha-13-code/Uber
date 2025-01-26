import React, { useState } from 'react'
import {useGSAP} from '@gsap/react'
import { gsap } from 'gsap'
import 'remixicon/fonts/remixicon.css'

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = React.useRef(null)

  const submitHandler = async (e) => {
    e.preventDefault();
  }

  useGSAP(function() {
    if(panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%'
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%'
      })
    }
  }, [panelOpen])
  return (
    <div className='h-screen relative'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"/>

      <div className='h-screen w-screen'>
      <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className=' flex flex-col justify-end h-screen absolute bottom-0 w-full'>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5 className='absolute right-6 top-6 text-2xl'>
          <i class="ri-arrow-down-wide-line"></i>
          </h5>
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
        <div ref={panelRef} className='h-[0] bg-red-500'>
        </div>
      </div>
    </div>
  )
}

export default Home
