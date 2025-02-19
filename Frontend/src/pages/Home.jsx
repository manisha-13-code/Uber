import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import Vehiclepanel from '../components/Vehiclepanel'
import ConfirmRide from '../components/ConfirmRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'
import RidePopUp from '../components/RidePopUp'

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = React.useRef(null)
  const panelCloseRef = React.useRef(null)
  const vehiclePanelRef = React.useRef(null)
  const confirmRidePanelRef = React.useRef(null)
  const vehicleFoundRef = React.useRef(null)
  const waitingForDriverRef = React.useRef(null)

  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingFordriver, setWaitingFordriver] = useState(false)
  const submitHandler = async (e) => {
    e.preventDefault();
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        opacity: 1
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        opacity: 0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])

  useGSAP(function() {
   if(vehiclePanelOpen) {
    gsap.to(vehiclePanelRef.current, {
      transform:'translateY(0)'
    })
   } else {
    gsap.to(vehiclePanelRef.current, {
      transform:'translateY(100%)'
   })
  }
  }, [vehiclePanelOpen])

  useGSAP(function() {
    if(confirmRidePanel) {
     gsap.to(confirmRidePanelRef.current, {
       transform:'translateY(0)'
     })
    } else {
     gsap.to(confirmRidePanelRef.current, {
       transform:'translateY(100%)'
    })
   }
   }, [confirmRidePanel])

   useGSAP(function() {
    if(vehicleFound) {
     gsap.to(vehicleFoundRef.current, {
       transform:'translateY(0)'
     })
    } else {
     gsap.to(vehicleFoundRef.current, {
       transform:'translateY(100%)'
    })
   }
   }, [vehicleFound])

   useGSAP(function() {
    if(waitingFordriver) {
     gsap.to(waitingForDriverRef.current, {
       transform:'translateY(0)'
     })
    } else {
     gsap.to(waitingForDriverRef.current, {
       transform:'translateY(100%)'
    })
   }
   }, [waitingFordriver])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" />

      <div
      onClick={()=> {
        setVehiclePanelOpen(false)
      }}
       className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className=' flex flex-col justify-end h-screen absolute bottom-0 w-full'>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5
            ref={panelCloseRef}
            className='absolute right-6 top-6 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-bold'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 rounded-full bg-gray-900"></div>
            <input
              onClick={() => {
                setPanelOpen(true)
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className='bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-4' type="text" placeholder='Add a pick-up loaction' />
            <input
              value={destination}
              onClick={() => {
                setPanelOpen(true)
              }}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className='bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-3' type="text" placeholder='Enter your destination' />
          </form>
        </div>
        <div ref={panelRef} className='bg-white p-5'>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen}/>
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-10 translate-y-full'>
       <Vehiclepanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanelOpen={setVehiclePanelOpen}/>
      </div>

      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12 translate-y-full'>
       <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12 translate-y-full'>
       <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>

      
      <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12 translate-y-full'>
       <WaitingForDriver setWaitingFordriver={setWaitingFordriver}/>
      </div>
    </div>
  )
}

export default Home
