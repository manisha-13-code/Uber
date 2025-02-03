import React from 'react'

const LocationSearchPanel = () => {
    const locations = [
       "112, Umiya Tenament, Near Indus University, Rancharda, Ahmedabad",
       "113, Umiya Tenament, Near Indus University, Rancharda, Ahmedabad",
       "114, Umiya Tenament, Near Indus University, Rancharda, Ahmedabad",
       "115, Umiya Tenament, Near Indus University, Rancharda, Ahmedabad" 
    ]
  return (
    <div>
        {
            locations.map(function(location, index) {
                return <div className='flex items-center gap-4 my-4 border-2 p-3 border-gray-50 active:border-black rounded-xl'>
                <h2 className='bg-[#eee] h-8 w-12 rounded-full flex justify-center items-center'><i className="ri-map-pin-fill"></i></h2>
                <h4 className='font-medium'>{location}</h4>
              </div>
            })
        }
    </div>
  )
}

export default LocationSearchPanel
