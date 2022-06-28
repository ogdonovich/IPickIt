import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import  ReactDOM  from 'react-dom';
import { useState } from 'react';


const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    height: '90vh',
    bgcolor: 'rgba(0,0,0, .9)',
    border: '5px solid #512DA8 ',
    // boxShadow: 24,
    // p: 4,
    zindex: 1000
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

   
function randomResturants (){
    
}


    




    return (
        <>
             <Modal
              open={toggleModal}
              onClose={() => setToggleModal(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              sx={style}
            >
              <Box >
                <div className='full-height full-width flex-col justify-center'>
                  <div className='horizontal-center'>Are you sure you want to buy this home?</div>
                  <div className="flex-col justify-center">
                      <div className='horizontal-center'>Name: {}</div>
                      <div className='horizontal-center'>Beds: {}</div>
                      <div className='horizontal-center'>Baths: {}</div>
                  </div>
                  
                </div>
              </Box>
            </Modal>
        </>
    

    );
}