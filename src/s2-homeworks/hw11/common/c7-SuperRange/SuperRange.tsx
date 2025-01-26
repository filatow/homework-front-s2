import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{ // стили для слайдера // пишет студент
        width: '147px',
        color: '#8B8B8B',
        '& .MuiSlider-track': {
          color: '#00CC22',
        },
        '& .MuiSlider-thumb': {
          height: 18,
          width: 18,
          backgroundColor: '#fff',
          border: '1px solid #00CC22',
          '&::before': {
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: '#00CC22',
            boxShadow: 'none'
          },
        },
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  )
}

export default SuperRange

