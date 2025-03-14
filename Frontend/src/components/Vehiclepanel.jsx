import React from 'react'

const Vehiclepanel = (props) => {
  return (
    <div>
       <h5 className='p-3 text-center w-[93%] absolute top-0'
        onClick={()=> {
          props.setVehiclePanelOpen(false)
        }}
        ><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
        <div 
        onClick={()=> {
            props.setConfirmRidePanel(true)
            props.selectVehicle('car')
        }}
        className='flex w-full mb-2 items-center justify-center border-2 active:border-black p-3 rounded-xl'>
          <img className='h-10' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
          <div className='w-1/2 ml-2'>
            <h4 className='font-medium text-sm'>UberGo<span><i className="ri-user-3-fill ml-2"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹{props.fare.car}</h2>
        </div>

        <div
         onClick={()=> {
            props.setConfirmRidePanel(true)
            props.selectVehicle('moto')
        }}
         className='flex w-full mb-2 items-center justify-center border-2 active:border-black p-3 rounded-xl'>
          <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
          <div className='w-1/2 ml-2'>
            <h4 className='font-medium text-sm'>Moto<span><i className="ri-user-3-fill ml-2"></i>1</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, motorcycles rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹{props.fare.moto}</h2>
        </div>

        <div 
         onClick={()=> {
            props.setConfirmRidePanel(true)
            props.selectVehicle('auto')
        }}
        className='flex w-full mb-2 items-center justify-center border-2 active:border-black p-3 rounded-xl'>
          <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className='w-1/2 ml-2'>
            <h4 className='font-medium text-sm'>UberAuto<span><i className="ri-user-3-fill ml-2"></i>1</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, Auto rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹{props.fare.auto}</h2>
        </div>
    </div>
  )
}

export default Vehiclepanel
