import React from 'react'

const RidePopUp = (props) => {
    return (
        <div>
            <h5 className='p-3 text-center w-[93%] absolute top-0'
                onClick={() => {
                    props.setRidePopupPanel(false)
                }}
            ><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>New Ride Available!</h3>

            <div className='flex items-center justify-between mt-4 p-3 bg-gray-200 rounded-lg'>
                <div className='flex items-center justify-start gap-3'>
                    <img className='h-10 w-10 rounded-full object-cover' src="https://imgs.search.brave.com/h0NzAlc6Ad_QwzfEPRdT2kDTYBEsdN8oqeApk5-PfvA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzQzLzEyLzM0/LzM2MF9GXzI0MzEy/MzQ2M196VG9vdWI1/NTd4RVdBQkRMazBq/SmtsRHlMU0dsMmpy/ci5qcGc" />
                    <h2 className='text-xl font-medium'>Harsh Patel</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>

            <div className="flex justify-between gap-2 flex-col items-center">
               
                <div className='w-full'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm text-gray-600'>Kaikondrahalli, Bangaluru, Karnataka</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>Third Wave Coffee</h3>
                            <p className='text-sm text-gray-600'>17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout, Bangaluru, Karnataka</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹193.20</h3>
                            <p className='text-sm text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => {

                    }}
                    className="w-full bg-green-600 text-white font-semibold p-2 rounded-lg mt-5">Confirm</button>

                <button
                    onClick={() => {
                        props.setRidePopupPanel(false)
                    }}
                    className="w-full bg-gray-300 text-gray-700 font-semibold p-2 rounded-lg mt-2">Ignore</button>
            </div>
        </div>
    )
}

export default RidePopUp
