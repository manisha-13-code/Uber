import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import FinishRide from '../components/FinishRide'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const CaptainRiding = () => {
    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = React.useRef(null)

    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [finishRidePanel])
    return (
        <div className='h-screen'>

            <div className='flex items-center justify-between fixed w-screen p-3'>
                <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

                <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i className="text-lg font-bold ri-logout-box-line"></i>
                </Link>
            </div>

            <div className='h-4/5'>
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>

            <div className='h-1/5 p-6 bg-yellow-400 flex items-center justify-between relative'>
                <h5 className='p-3 text-center w-[95%] absolute top-0'
                    onClick={() => {
                        setFinishRidePanel(true)
                    }}
                ><i className="text-3xl text-gray-800 ri-arrow-down-wide-fill"></i></h5>

                <h4 className='text-xl font-semibold mt-5'>4 KM away</h4>
                <button className='bg-green-600 text-white font-semibold px-10 py-3 rounded-lg mt-5'>Complete Ride</button>
            </div>
            <div ref={finishRidePanelRef} className='fixed w-full translate-y-full bottom-0 h-screen bg-white px-3 py-10'>
                <FinishRide setFinishRidePanel={setFinishRidePanel}/>
            </div>
        </div>
    )
}

export default CaptainRiding
