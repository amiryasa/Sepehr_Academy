import * as React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const Tooltips = (props) => {
  const state = props.state === 'active' ? '#04A641' : '#FF0000';
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: state,
      color: "#FFFFFF",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

  return (
      <LightTooltip title={
      <p style={{ fontFamily: "bakh", margin: "0" }}> {props.state === 'active' ? 'کاربری فعال' : 'کاربری غیرفعال'} </p>
      } placement="left">
        {props.children}
      </LightTooltip>
  );
};

export { Tooltips };


