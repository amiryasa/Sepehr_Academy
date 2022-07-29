import * as React from 'react';
import Button from '@mui/material/Button';


export default function BasicButtons(props) {
  return (
    <>
      <Button variant="contained" size={props.size} startIcon={props.iconsStart}>{props.text}</Button>
    </>
  );
}