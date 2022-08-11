import * as React from 'react';
import TextField from '@mui/material/TextField';

const Input = (props) => {

    return(
        <TextField 
        id="outlined-basic" 
        variant="outlined" 
        label={props.title}
        helperText={props.errorMessage}  

        style={{backgroundColor:'#FCFCFC', fontSize:'24px', fontFamily: 'bakh'}}
        />
    );

}

export {Input};