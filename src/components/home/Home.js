

import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import '../../App.css'
import Maploader from '../map/MapLoader'
import React from 'react'
import { UserContext } from '../../App';










export default function Home() {
  
const {user, setUser} = useContext(UserContext)

    useEffect(() => {
      const email = localStorage.getItem("email")
      axios.get(`http://localhost:8080/user/findUserByEmail/${email}`)
      .then((response) => {
        console.log(response.data);
        setUser(response.data)
      }).catch((e) => {
        console.log(e);
      })
    }, [])

   
  
    const displayUserName = () => {
      if(localStorage.getItem("email")) {
        
          

        return (
          
            ' ' + user?.firstName  + ' ' + user?.lastName
        )
      }
      return "Guest"
    }



  


  return (
   
      <div className='center flex-col'>
        <div className='center flex-col'>
          <h1 className='center'>Welcome, {displayUserName()}!</h1>
        </div>
        <div className='center flex-col'>
        
          <Maploader />
          
        </div>



      </div>


   

  );



}













