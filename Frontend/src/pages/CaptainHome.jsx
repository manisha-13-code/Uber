import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const CaptainHome = () => {

  const ridePopupPanelRef = React.useRef(null)
  const  [ridePopupPanel, setRidePopupPanel] = useState(true)

  useGSAP(function() {
      if(ridePopupPanel) {
       gsap.to(ridePopupPanelRef.current, {
         transform:'translateY(0)'
       })
      } else {
       gsap.to(ridePopupPanelRef.current, {
         transform:'translateY(100%)'
      })
     }
     }, [ridePopupPanel])
  return (
    <div className='h-screen'>

      <div className='flex items-center justify-between fixed w-screen p-3'>
        <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

        <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="text-lg font-bold ri-logout-box-line"></i>
        </Link>
      </div>

      <div className='h-3/5'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='h-2/5 p-6'>
        <CaptainDetails />
      </div>

      <div ref={ridePopupPanelRef} className='fixed w-full translate- z-10 bottom-0 bg-white px-3 py-10'>
        <RidePopUp setRidePopupPanel={setRidePopupPanel}/>
      </div>
    </div>
  )
}

export default CaptainHome
