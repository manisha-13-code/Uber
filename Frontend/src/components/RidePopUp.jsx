import React from 'react'

const RidePopUp = () => {
    return (
        <div>
            <h5 className='p-3 text-center w-[93%] absolute top-0'
                onClick={() => {
                    props.setVehiclePanelOpen(false)
                }}
            ><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>New Ride Available!</h3>

            <div className="flex justify-between gap-2 flex-col items-center">
                <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" />
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
                    
                }}
                    className="w-full bg-gray-300 text-gray-700 font-semibold p-2 rounded-lg mt-5">Ignore</button>
            </div>
        </div>
    )
}

export default RidePopUp
