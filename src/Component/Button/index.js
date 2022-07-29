import * as React from 'react';
import Button from '@mui/material/Button';


const BasicButtons = (props) => {
  return (
    <>
      <Button variant="contained" color={props.color} size={props.size} startIcon={props.iconsStart}>{props.text}</Button>
    </>
  );
}

export {BasicButtons};