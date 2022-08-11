import * as React from 'react';
import TextField from '@mui/material/TextField';
import './Input.css'

const Input = (props) => {

    return (
        <TextField
            id="outlined-basic"
            variant="outlined"
            label={props.title}
            helperText={props.errorMessage}
            className='inputModel'
            style={{ backgroundColor: '#FCFCFC', fontSize: '24px', fontFamily: 'bakh' }}
        />
    );
}

export { Input };