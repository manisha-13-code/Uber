import React from 'react'
import { Link } from 'react-router-dom'

const CaptainHome = () => {
  return (
    <div className='h-screen'>

      <div className='flex items-center justify-between fixed w-screen p-3'>
        <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

        <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="text-lg font-bold ri-logout-box-line"></i>
        </Link>
      </div>

      <div className='h-1/2'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>

      <div className='h-1/2 p-5'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-start gap-3'>
            <img className='h-10 w-10 rounded-full object-cover' src="https://imgs.search.brave.com/h0NzAlc6Ad_QwzfEPRdT2kDTYBEsdN8oqeApk5-PfvA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzQzLzEyLzM0/LzM2MF9GXzI0MzEy/MzQ2M196VG9vdWI1/NTd4RVdBQkRMazBq/SmtsRHlMU0dsMmpy/ci5qcGc" alt="" />
            <h4 className='text-lg font-medium'>Harsh Patel</h4>
          </div>

          <div>
            <h4 className='text-xl font-semibold'>₹295.20</h4>
            <p className='text-sm text-gray-600'>Earned</p>
          </div>
        </div>

        <div className='flex p-3 bg-gray-100 rounded-full justify-center gap-5 items-start mt-5'>
          <div className='text-center'>
            <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
          <div className='text-center'>
            <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
          <div className='text-center'>
            <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default CaptainHome
