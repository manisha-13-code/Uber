import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import 'remixicon/fonts/remixicon.css'
import axios from 'axios'
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
  const [activeField, setActiveField] = useState(null) // "pickup" or "destination"
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
  const [fare, setFare] = useState({})
  const [vehicleType, setVehicleType] = useState(null)
  
  const submitHandler = async (e) => {
    e.preventDefault();
  }

  const handleSelectSuggestion = (suggestion) => {
    if(activeField === 'pickup'){
      setPickup(suggestion)
    } else if(activeField === 'destination'){
      setDestination(suggestion)
    }
    // Close the suggestion panel after selection
    setPanelOpen(false)
  }

  useGSAP(() => {
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

  useGSAP(() => {
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

  useGSAP(() => {
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

  useGSAP(() => {
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

  useGSAP(() => {
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
  
  async function findTrip() {
    setVehiclePanelOpen(true)
    setPanelOpen(false)

    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
      params: {
        pickup,
        destination,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    
    setFare(response.data)
}

async function createRide() {
  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
    params: {
      pickup,
      destination,
      vehicleType
    },
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  console.log(response.data)

}


  return (
    <div className
    ='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" />
      <div onClick={()=> { setVehiclePanelOpen(false) }} className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='flex flex-col justify-end h-screen absolute bottom-0 w-full'>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5 ref={panelCloseRef} className='absolute right-6 top-6 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-bold'>Find a trip</h4>
          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 rounded-full bg-gray-900"></div>
            <input
              onClick={() => {
                setPanelOpen(true)
                setActiveField('pickup')
              }}
              value={pickup}
              onChange={(e) => { setPickup(e.target.value) }}
              className='bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-4'
              type="text"
              placeholder='Add a pick-up location'
            />
            <input
              onClick={() => {
                setPanelOpen(true)
                setActiveField('destination')
              }}
              value={destination}
              onChange={(e) => { setDestination(e.target.value) }}
              className='bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-3'
              type="text"
              placeholder='Enter your destination'
            />
          </form>
          <button
          onClick={findTrip}
           className='bg-black text-white text-lg font-bold py-2 rounded-lg mt-3 w-full'>
            Find Trip
          </button>
        </div>
        <div ref={panelRef} className='bg-white p-5'>
          <LocationSearchPanel 
            query={activeField === 'pickup' ? pickup : activeField === 'destination' ? destination : ''} 
            onSelectSuggestion={handleSelectSuggestion} 
            setPanelOpen={setPanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
          />
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-10 translate-y-full'>
       <Vehiclepanel
        selectVehicle={setVehicleType}
        fare={fare} setConfirmRidePanel={setConfirmRidePanel} setVehiclePanelOpen={setVehiclePanelOpen}/>
      </div>
      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12 translate-y-full'>
       <ConfirmRide 
       createRide={createRide}
       pickup={pickup}
       destination={destination}
       fare={fare}
       vehicleType={vehicleType}
       setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12 translate-y-full'>
       <LookingForDriver
       createRide={createRide}
       pickup={pickup}
       destination={destination}
       fare={fare}
       vehicleType={vehicleType}
        setVehicleFound={setVehicleFound}/>
      </div>
      
      <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12 translate-y-full'>
       <WaitingForDriver setWaitingFordriver={setWaitingFordriver}/>
      </div>
    </div>
  )
}

export default Home