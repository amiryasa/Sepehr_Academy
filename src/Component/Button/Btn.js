import * as React from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const Btn = (props) => {

    const theme = createTheme({
      palette: {
        info: {
          main: '#00ADEF',
          light: '#00ADEF',
          dark: '#2AC4FF',
          contrastText: '#fff',
        },
        goal: {
          main: '#04A641',
          light: '#04A641',
          dark: '#06D152',
          contrastText: '#fff',
        },
        detail: {
          main: '#2693FF',
          light: '#2693FF',
          dark: '#2AB1FF',
          contrastText: '#fff',
        },
      },
  });

  return (
    <ThemeProvider theme={theme} className='btnThemeProvider'>
      <Button 
      className='btnButton'
      variant="contained" 
      color= {props.color}
      style={{
      width:`${props.width}`, 
      height:`${props.height}`, 
      fontSize:`${props.fontSize}`, 
      margin:`${props.margin}`,
      fontFamily:'bakh'
    }}
      >
      {props.text} 
      </Button>
    </ThemeProvider>
  );
}

export {Btn};