import React from 'react'


import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import humidity_icon from '../assets/humidity.png';

function ForeCast() {


  const allIcons = {
    '01d': clear_icon,
    '01n': clear_icon,
    '02d': cloud_icon,
    '02n': cloud_icon,
    '03d': cloud_icon,
    '03n': cloud_icon,
    '04d': drizzle_icon,
    '04n': drizzle_icon,
    '09d': rain_icon,
    '09n': rain_icon,
    '10d': rain_icon,
    '10n': rain_icon,
    '11d': snow_icon,
    '11n': snow_icon,
    '13d': snow_icon,
    '13n': snow_icon,
    '50d': wind_icon,
    '50n': wind_icon,
  };


  const data = [1,2,3,4,5];
  return (
    <div>
      <div className='flex items-center justify-start mt-6'>
        <p className='font-medium uppercase'>Weather Forecast</p>
      </div>
      <hr className='my-2' />

      <div className='flex *:items-center justify-between '>
        {
          data.map((data,index) =>(
            <div 
            key={index} 
            className='flex flex-col items-center justify-center'>
              <p className='font-light text-sm'>Tuesday</p>
              <img 
              src={clear_icon} 
              alt="weather icon"
              className='w-12 my-1'
              />
              <p className='font-medium'>25°</p>
             
            </div>
          )) 
        }
      </div>
    </div>
  )
}

export default ForeCast