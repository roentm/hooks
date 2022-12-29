import { Star, StarBorder } from '@mui/icons-material';
import { Box } from '@mui/system';
import React from 'react'



const StarRating = ({stars}) => {
    const totalStars = 10;
    const activeStars =stars;

  return (
    <Box sx={{display:"inline-flex",position:"relative",cursor:"pointer",textAlign:"left"}}>
        {[...new Array(totalStars)].map((arr,index)=>{
            return (
                <Box position="relative">
                    <Box sx={{width:index<=activeStars-1?"100%":"0",overflow:"hidden",position:"absolute"}}>
                        <Star/>
                    </Box>
                    <Box>
                        <StarBorder/>
                    </Box>
                </Box>
            )
        })}
        <p className='ms-1'>({activeStars}/{totalStars})</p>
    </Box>
    
  )
}

export default StarRating