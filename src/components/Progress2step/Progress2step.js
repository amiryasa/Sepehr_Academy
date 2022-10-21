import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import "./Progress2step.css";

const Progress2step = (props) => {

  return (
    <div className="Progress2step">
        <Box sx={{ width: 180 }}>
        <p className="Progress2stepTopic"> {props.title} </p>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={props.valueOf2step}
            step={props.step}
            onChange={props.handleProgress2step}
            valueLabelDisplay="auto"
            min={props.min}
            max={props.max}
          />
        </Box>
    </div>
  );
};

export { Progress2step };
