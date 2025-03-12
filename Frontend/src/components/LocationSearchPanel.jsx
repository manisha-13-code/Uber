import React, { useState, useEffect } from 'react'
import axios from 'axios'

const LocationSearchPanel = (props) => {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const fetchSuggestions = async () => {
      if(!props.query || props.query.trim() === '') {
        setSuggestions([])
        return
      }
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
          params: { query: props.query },
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        setSuggestions(response.data) // assuming response.data is an array of suggestion strings
      } catch (error) {
        console.error('Error fetching suggestions:', error)
      }
    }
    fetchSuggestions()
  }, [props.query])

  return (
    <div>
      {
        suggestions.map((location, idx) => (
          <div
            key={idx}
            onClick={() => {
              props.onSelectSuggestion(location)
              props.setVehiclePanelOpen(true)
              props.setPanelOpen(false)
            }}
            className='flex items-center gap-4 my-4 border-2 p-3 border-gray-50 active:border-black rounded-xl'
          >
            <h2 className='bg-[#eee] h-8 w-12 rounded-full flex justify-center items-center'>
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className='font-medium'>{location}</h4>
          </div>
        ))
      }
    </div>
  )
}

export default LocationSearchPanel