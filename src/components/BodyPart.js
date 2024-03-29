import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
      return (
            <Stack
              type="button"
              alignItems="center"
              justifyContent="center"
              className="bodyPart-card"
              sx={{ 
                backgroundColor: 'none',
                borderRadius: '10px', 
                width: '270px', 
                height: '290px', 
                cursor: 'pointer', 
                gap: '2px' 
              }}
               onClick={() => {
               setBodyPart(item);
               window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
               }}
               >
              <img src={Icon} alt="dumbbell" style={{ width: '390px', height: '220px'}} />
              <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#fff" textTransform="capitalize"> {item}</Typography>    
            </Stack>
      )
}

export default BodyPart
