import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";

import "./SelectCheck.css";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 1;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 3 + ITEM_PADDING_TOP,
      width: 180,
    },
  },
};

const SelectCheck = (props) => {

  return (
    <div className="SelectCheck">
      <FormControl sx={{width: 180}}>
        <Select
          multiple
          displayEmpty
          value={props.teacherState}
          onChange={props.handleSelection}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>مدرس دوره</em>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <em>مدرس دوره</em>
          </MenuItem>
          {props.listOfTeacher.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={props.teacherState.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export { SelectCheck };
