import * as React from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';


const BasicButtons = (props) => {
  return (
    <ThemeProvider theme={props.theme}>
      <Button className={props.classes} variant="contained" color={props.color} size={props.size} startIcon={props.iconsStart}>{props.text}</Button>
    </ThemeProvider>
  );
}

export { BasicButtons };