import React from 'react'
import { FaThermometerEmpty } from 'react-icons/fa'
import { BiSolidDropletHalf } from 'react-icons/bi'
import { FaWind } from 'react-icons/fa'
import { GiSunset, GiSunrise } from 'react-icons/gi'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'


import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import humidity_icon from '../assets/humidity.png';

function TempAndDetails() {

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

      const verticalDetails = [
        {
          id: 1,
          Icon: FaThermometerEmpty,
          title: 'Real Feel',
          value: '30°',
        },
        {
            id: 2,
            Icon: BiSolidDropletHalf,
            title: 'Humidity',
            value: '36%',
          },
          {
            id: 3,
            Icon: FaWind,
            title: 'Wind',
            value: '11 km/h',
          }

      ]

      const horizontalDetails = [
        {
          id: 1,
          Icon: GiSunrise,
          title: 'Sunrise',
          value: '05:40 AM',
        },
        {
          id: 2,
          Icon: GiSunset,
          title: 'Sunset',
          value: '08:40 PM',
        },
        {
          id: 3,
          Icon: MdKeyboardArrowUp,
          title: 'High',
          value: '37°',
        },
        {
            id: 3,
            Icon: MdKeyboardArrowDown,
            title: 'Low',
            value: '12°',
          }

      ]


  return (
    <div>
        <div className='flex  items-center justify-center py-6 text-xl text-cyan-300 '>
            <p>Rain</p>
        </div>

        <div className='flex flex-row items-center justify-between py-3'>
            <img 
            src={clear_icon} 
            alt="weather-icon"
            className='w-20'
            />
            <p className='text-5xl'>30°</p>
            <div className='flex flex-col items-start space-y-3'>
                {
                    verticalDetails.map(({id, Icon, title, value}) =>(
                        <div key={id} className='flex font-light text-sm items-center justify-center'>
                            <Icon size={20} className='mr-1'/>
                           {title}: <span className='font-medium ml-1'>{value}</span>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='flex flex-row items-center justify-center space-x-10 text-sm py-3'>
            
                {
                    horizontalDetails.map(({id, Icon, title, value}) =>(
                        <div key={id} className='flex flex-row items-center '>
                            <Icon size={30} className='mr-1'/>
                            <p className='font-light ml-1' > 
                            {title}: 
                            <span className='font-medium ml-1'>{value}</span></p>
                        </div>    
                    ))
                }
        </div>
    </div>
  )
}

export default TempAndDetails