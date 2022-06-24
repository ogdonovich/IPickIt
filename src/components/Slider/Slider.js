import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useContext } from 'react';



export default function DiscreteSlider({setPostion}) {

    function valuetext(value) {
        //console.log(value);
        React.createContext(value)
      return value;
    }
    
   

  return (
    <Box sx={{ width: '70vw' }}>
      <Slider sx={{margin: '30px'}}
        aria-label="Distance"
        defaultValue={10000}
        getAriaValueText={valuetext}
        aria-valuetext=""
        aria-labelledby="miles"
        valueLabelDisplay="auto"
        step={1000}
        marks
        min={1000}
        max={50000}
      />
     
    </Box>

    
  );
}