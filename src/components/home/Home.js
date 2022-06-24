

import { Fragment, useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Header from '../header/Header';
import App from '../../App';
import '../../App.css'
import Maploader from '../map/MapLoader2'
import React from 'react'
import Slider from '../Slider/Slider'









function Home() {
/*  const [user, setUser] = useState(null)
  useEffect(() => {
    const email = localStorage.getItem("email")
    axios.get(`http://localhost:8080/user/findUserByEmail/${email}`)
    .then((response) => {
      setUser(response.data)
    })
  }, [])

  const displayUserName = () => {
    if (user != null) {
      return user.name
    }
    return "content"
  }*/

  const [pos, setPosition] = useState(10000)
  const range = useContext(setPosition)
  console.log(range);


  return (
    <div className='center flex-col'>
      <div className='center flex-col'>
      <h1 className='center'>Welcome</h1>
      </div>
      <div className='center'>
      <Maploader pos={pos}/>
      </div>
      <div className='center'>
      <Slider setPosition={range}/>
</div>


    </div>
    



  );


  
}

export default Home;




      
      





