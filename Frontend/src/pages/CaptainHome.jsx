import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { useEffect, useContext } from 'react'
import { SocketContext } from '../context/SocketContext'
import { CaptainDataContext } from '../context/CaptainContext'
const CaptainHome = () => {

  const  [ridePopupPanel, setRidePopupPanel] = useState(true)
  const  [ConfirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)

  const ridePopupPanelRef = React.useRef(null)
  const confirmRidePopupPanelRef = React.useRef(null)

  const { socket } = useContext(SocketContext)
  const { captain } = useContext(CaptainDataContext)

  useEffect(() => {
    socket.emit('join', { userId: captain._id, userType: 'captain' })

    const updateLocation = () => {
      if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition((position) => {

        console.log('captain location', position.coords.latitude, position.coords.longitude)
        socket.emit('update-location-captain', {
          userId: captain._id,
          location: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        })
      })
  }
    else {
      console.log('Geolocation is not supported by this browser.')
    }
  }
  const locationInterval = setInterval(updateLocation, 10000)
  updateLocation()

  // return () => clearInterval(locationInterval)

})

socket.on('new-ride', (data) => {
  console.log('new ride', data)
})
    
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

     useGSAP(function() {
      if(ConfirmRidePopupPanel) {
       gsap.to(confirmRidePopupPanelRef.current, {
         transform:'translateY(0)'
       })
      } else {
       gsap.to(confirmRidePopupPanelRef.current, {
         transform:'translateY(100%)'
      })
     }
     }, [ConfirmRidePopupPanel])
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

      <div ref={ridePopupPanelRef} className='fixed w-full translate-y-full bottom-0 bg-white px-3 py-10'>
        <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>
      </div>

      <div ref={confirmRidePopupPanelRef} className='fixed w-full translate-y-full bottom-0 h-screen bg-white px-3 py-10'>
        <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel}/>
      </div>

    </div>
  )
}

export default CaptainHome
