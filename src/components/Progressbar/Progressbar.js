import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import "./Progressbar.css";
import { Tooltips } from "../Tooltive/Tooltips";

function valuetext(value) {
  return `${value}°C`;
}

const Progressbar = (props) => {
  let color;

  if (props.type === 'capacity') {
    if (props.capacity < 26) {
      color = "#0ED600";
    } else if (props.capacity > 25 && props.capacity < 51) {
      color = "#00D2E7";
    } else if (props.capacity > 50 && props.capacity < 76) {
      color = "#FD9814";
    } else if (props.capacity > 75) {
      color = "#FD2414";
    }
  }

  if (props.type === 'compair') {
    if (props.capacity < 50) {
      color = "#FD2414";
    } else if (props.capacity === 50) {
      color = "#00D2E7";
    } else if (props.capacity > 50) {
      color = "#0ED600";
    }
  }

  return (
    <Tooltips color={color} message={props.tooltiveMes}>
      <Box sx={{ width: props.size }}>
        <p className="ProgressbarTopic"> {props.message} </p>

        <Slider
          aria-label="Temperature"
          defaultValue={props.capacity}
          getAriaValueText={valuetext}
          color="secondary"
          disabled
          style={{ paddingTop: 0, color: color }}
        />
      </Box>
    </Tooltips>
  );
};

export { Progressbar };