import * as React from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';

import './Btn.css'


const Btn = (props) => {

  const navigator = useNavigate();

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
      restore: {
        main: '#00707F',
        light: '#00707F',
        dark: '#02959A',
        contrastText: '#fff',
      },
      warning: {
        main: '#FF0000',
        light: '#FF0000',
        dark: '#FF3737',
        contrastText: '#fff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Button
        type={props.type}
        className={props.elementClass}
        variant={props.variant}
        color={props.color}
        style={{
          margin: `${props.margin}`,
          borderWidth: '1.5px',
          borderColor: `${props.borderColor}`
        }}
        onClick={props.onChange}
      >
        {props.text}
      </Button>
    </ThemeProvider>
  );
}

export { Btn };