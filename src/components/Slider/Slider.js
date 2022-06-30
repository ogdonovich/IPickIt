import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useContext } from 'react';
import { SliderPositionContext } from '../../App';




export default function DiscreteSlider() {

    function Valuetext(value) {
        //console.log(value);
        const {setPosition}= useContext(SliderPositionContext)
       setPosition(value)
      return value;
    }
    
   

  return (
    <Box sx={{ width: '70vw'}}>
      <div className='modal-data-title'>Range</div>
      <Slider sx={{margin: '30px', color: '#009688' }}
        aria-label="Distance"
        defaultValue={10000}
        getAriaValueText={Valuetext}
        aria-valuetext="meters"
        aria-labelledby="miles"
        valueLabelDisplay="auto"
        step={1000}
        marks
        min={1000}
        max={50000}
       //onChange={useContext(valuetext)}
      />
     <div>Meters</div>
    </Box>

    
  );
}