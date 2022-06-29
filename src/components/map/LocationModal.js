import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { useState, Suspense } from 'react';


const style = {
  position: 'flex',
  //  top: '50%',
  //  left: '50%',
  // transform: 'translate(-50%, -50%)',
  width: '80vw',
  height: '90vh',
  bgcolor: 'rgba(0,0,0, .9)',
  border: '3px solid #512DA8 ',
  boxShadow: 24,
  p: 1,
  zindex: 1000,
  justifyContent: 'center'
};

const overlaystyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  // bgcolor: 'rgba(0,0,0,.7)',
  // border: '2px solid #000',
  // boxShadow: 24,
  // p: 4,
  zindex: 1000
};

export default function LocationModal({ toggleModal, setToggleModal, locations }) {
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);


  function randomResturants() {

    const resturantSelected = [];

    for (let index = 0; index <= 4; index++) {
      const randomIndex = Math.round(Math.random() * locations.results.length)
      // console.log(randomIndex);
      const element = locations.results[randomIndex];
      // console.log(element);
     resturantSelected.push(element)


    }

    return resturantSelected.map((element) =>{
      return (
        
        <Box sx={style}>
          <div className='full-height full-width flex-col justify-center restuarant-result'>
            
            <div className='horizontal-center'>How does this sound?</div>
            <div className="flex-col justify-center">
              <div className='horizontal-center'>Name: {element.poi.name}</div>
              <div className='horizontal-center'>Phone: {element.poi.phone}</div>
              <div className='horizontal-center'>Address: {element.address.freeformAddress}</div>
            </div>
  
          </div>
        </Box>
        
      )

    }
    
    )

   


  }







  return (
    <>
      
      <Modal
        open={toggleModal}
        onClose={(event, reason) => setToggleModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <div className='modal-results flex-col modal-box'>
          {randomResturants()}
        </div>
        {/* <Box >
                <div className='full-height full-width flex-col justify-center'>
                  <div className='horizontal-center'>How does this sound?</div>
                  <div className="flex-col justify-center">
                      <div className='horizontal-center'>Name: {locations.results[0].poi.name}</div>
                      <div className='horizontal-center'>Phone: {locations.results[0].poi.phone}</div>
                      <div className='horizontal-center'>Address: {locations.results[0].address.freeformAddress}</div>
                  </div>
                  
                </div>
              </Box> */}
      </Modal>
      
    </>


  );
}