import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { ThemeProvider } from "@mui/material/styles";

export default function IconButtons(props) {
  return (
    <ThemeProvider theme={props.theme}>
      <IconButton
        aria-label="delete"
        onClick={props.click}
        size={props.size}
        color={props.color}
      >
        {props.children}
      </IconButton>
    </ThemeProvider>
  );
}
