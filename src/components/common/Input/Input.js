import * as React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import "./Input.css";

const Input = (props) => {
  return (
    <div className="inputContainer">
      <TextField
        id="outlined-basic"
        className={`inputModel ${props.className}`}
        variant="outlined"
        multiline={props.multiline}
        rows={props.row}
        label={props.title}
        defaultValue={props.defaultValue}
        helperText={props.errorMessage}
        style={{
          margin: `${props.margin}`,
          width: `${props.width}`,
        }}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        error={props.error}
      />
    </div>
  );
};

export { Input };
