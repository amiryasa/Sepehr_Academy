import * as React from 'react';
import TextField from '@mui/material/TextField';
import './Input.css'

const Input = (props) => {

    return (
        <TextField
            id="outlined-basic"
            className='inputModel'
            variant="outlined"
            multiline={props.multiline}
            rows={props.row}
            label={props.title}
            defaultValue={props.defaultValue}
            helperText={props.errorMessage}
            style={{ backgroundColor: '#FCFCFC', margin:`${props.margin}`, width:`${props.width}`}}
        />
    );
}

export { Input };