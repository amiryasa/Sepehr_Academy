import * as React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import "./Input.css";

const Input = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);

  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="inputContainer">
      <TextField
        type={props.password ? showPassword ? 'text' : 'password' : props.type}
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

        InputProps={props.password && {
          endAdornment:
            <InputAdornment position="start">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword && props.password ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>

        }}

      />
    </div >
  );
};

export { Input };
