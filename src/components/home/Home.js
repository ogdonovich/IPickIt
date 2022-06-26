

import { Fragment, useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Header from '../header/Header';
import App from '../../App';
import '../../App.css'
import Maploader from '../map/MapLoader2'
import React from 'react'
import Slider from '../Slider/Slider'





export const PositionContext = React.createContext()



export default function Home() {
   const [user, setUser] = useState(null)
    useEffect(() => {
      const email = localStorage.getItem("email")
      axios.get(`http://localhost:8080/user/findUserByEmail/${email}`)
      .then((response) => {
        setUser(response.data)
      })
    }, [])
  
    const displayUserName = () => {
      if(localStorage.getItem("emailCookie")) {
        return (
            ' ' + user.firstName + ' ' + user.lastName
        )
      }
      return "Guest"
    }



  const [pos, setPosition] = useState(10000)
  // const range = useContext(setPosition)
  // console.log(range);


  return (
    <PositionContext.Provider value={pos}>
      <div className='center flex-col'>
        <div className='center flex-col'>
          <h1 className='center'>Welcome {displayUserName()}</h1>
        </div>
        <div className='center'>
          <Maploader />
        </div>
        <div className='center'>
          <Slider />
        </div>


      </div>


    </PositionContext.Provider>

  );



}













