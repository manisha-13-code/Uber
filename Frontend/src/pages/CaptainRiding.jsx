import React from 'react'
import { Link } from 'react-router-dom'

const CaptainRiding = () => {
    return (
        <div className='h-screen'>

            <h5 className='p-3 text-center w-[93%] absolute top-0'
                onClick={() => {
                    props.setRidePopupPanel(false)
                }}
            ><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>

            <div className='flex items-center justify-between fixed w-screen p-3'>
                <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

                <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i className="text-lg font-bold ri-logout-box-line"></i>
                </Link>
            </div>

            <div className='h-4/5'>
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>

            <div className='h-1/5 p-6 bg-yellow-400 flex items-center justify-between'>
                <h4 className='text-xl font-semibold'>4KM away</h4>
                <button className='bg-green-600 text-white font-semibold px-8 py-3 rounded-lg mt-5'>Complete</button>
            </div>
        </div>
    )
}

export default CaptainRiding
