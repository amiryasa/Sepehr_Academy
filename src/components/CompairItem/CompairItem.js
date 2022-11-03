import React from "react";

import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import CachedRoundedIcon from "@mui/icons-material/CachedRounded";
import DragHandleRoundedIcon from "@mui/icons-material/DragHandleRounded";
import PauseCircleOutlineRoundedIcon from "@mui/icons-material/PauseCircleOutlineRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";

import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import ExpandCircleDownRoundedIcon from "@mui/icons-material/ExpandCircleDownRounded";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
import ArrowCircleDownRoundedIcon from "@mui/icons-material/ArrowCircleDownRounded";

import "./CompairItem.css";
import { Progressbar } from "../Progressbar/Progressbar";
import { Btn } from "../common/Button/Btn";

const CompairItem = (props) => {
  const selectIcon = {};

  if (props.comperList.rate === props.itemId) {
    selectIcon["rate"] = <ArrowCircleUpRoundedIcon color="success" />;
  } else if (props.comperList.rate === 0) {
    selectIcon["rate"] = <RemoveCircleOutlineRoundedIcon color="primary" />;
  } else {
    selectIcon["rate"] = <ArrowCircleDownRoundedIcon color="error" />;
  }

  if (props.comperList.cost === props.itemId) {
    selectIcon["cost"] = <ArrowCircleUpRoundedIcon color="success" />;
  } else if (props.comperList.cost === 0) {
    selectIcon["cost"] = <RemoveCircleOutlineRoundedIcon color="primary" />;
  } else {
    selectIcon["cost"] = <ArrowCircleDownRoundedIcon color="error" />;
  }

  if (props.comperList.studentCount === props.itemId) {
    selectIcon["studentCount"] = <ArrowCircleUpRoundedIcon color="success" />;
  } else if (props.comperList.studentCount === 0) {
    selectIcon["studentCount"] = (
      <RemoveCircleOutlineRoundedIcon color="primary" />
    );
  } else {
    selectIcon["studentCount"] = <ArrowCircleDownRoundedIcon color="error" />;
  }

  if (props.comperList.capacity === props.itemId) {
    selectIcon["capacity"] = <ArrowCircleUpRoundedIcon color="success" />;
  } else if (props.comperList.capacity === 0) {
    selectIcon["capacity"] = <RemoveCircleOutlineRoundedIcon color="primary" />;
  } else {
    selectIcon["capacity"] = <ArrowCircleDownRoundedIcon color="error" />;
  }

  if (props.comperList.start === props.itemId) {
    selectIcon["start"] = <ArrowCircleUpRoundedIcon color="success" />;
  } else if (props.comperList.start === 0) {
    selectIcon["start"] = <RemoveCircleOutlineRoundedIcon color="primary" />;
  } else {
    selectIcon["start"] = <ArrowCircleDownRoundedIcon color="error" />;
  }

  if (props.comperList.section === props.itemId) {
    selectIcon["section"] = <ArrowCircleUpRoundedIcon color="success" />;
  } else if (props.comperList.section === 0) {
    selectIcon["section"] = <RemoveCircleOutlineRoundedIcon color="primary" />;
  } else {
    selectIcon["section"] = <ArrowCircleDownRoundedIcon color="error" />;
  }

  const progressArray = Object.values(props.comperList);

  let counter = 0;
  for (let item of progressArray) {
    if (item === props.itemId) {
      counter++;
    }
  }

  return (
    <div className="CompairItem">
      <div className="CompairItemCenter">
        <img src={props.couurseInfo.image} alt="course" />
        <p className="CompairItemTitle">{props.couurseInfo.title}</p>
        <p className="CompairItemTeacher">{props.couurseInfo.teacher}</p>
      </div>

      <div className="CompairItemElement">
        <p className="CompairItemElementTitle">امتیاز:</p>
        <p className="CompairItemElementCount">{props.couurseInfo.rate}</p>
        <div>{selectIcon.rate}</div>
      </div>
      <hr></hr>
      <div className="CompairItemElement">
        <p className="CompairItemElementTitle">قیمت:</p>
        <p className="CompairItemElementCount">{props.couurseInfo.cost}</p>
        <div>{selectIcon.cost}</div>
      </div>
      <hr></hr>
      <div className="CompairItemElement">
        <p className="CompairItemElementTitle">دانشجویان دوره:</p>
        <p className="CompairItemElementCount">
          {props.couurseInfo.studentCount} نفر
        </p>
        <div>{selectIcon.studentCount}</div>
      </div>
      <hr></hr>
      <div className="CompairItemElement">
        <p className="CompairItemElementTitle">ظرفیت دوره:</p>
        <p className="CompairItemElementCount">
          {props.couurseInfo.capacity} نفر
        </p>
        <div>{selectIcon.capacity}</div>
      </div>
      <hr></hr>
      <div className="CompairItemElement">
        <p className="CompairItemElementTitle">شروع دوره:</p>
        <p className="CompairItemElementCount">{props.couurseInfo.start}</p>
        <div>{selectIcon.start}</div>
      </div>
      <hr></hr>
      <div className="CompairItemElement">
        <p className="CompairItemElementTitle">مدت دوره:</p>
        <p className="CompairItemElementCount">{props.couurseInfo.section}</p>
        <div>{selectIcon.section}</div>
      </div>
      <hr></hr>

      <div className="CompairItemprogressbar01">
        <Progressbar
          capacity={(counter / 6) * 100}
          message="فاکتورهای برتر"
          size={315}
          tooltiveMes={`${counter}/6`}
          type="compair"
        ></Progressbar>
      </div>

      <div className="CompairItemprogressbar02">
        <Progressbar
          capacity={(counter / 6) * 100}
          message="فاکتورهای برتر"
          size={270}
          tooltiveMes={`${counter}/6`}
          type="compair"
        ></Progressbar>
      </div>

      <hr></hr>
      <div className="CompairItemButton">
        <Btn
          color="goal"
          text="افزودن به سبد"
          elementClass="largeBtn"
          variant="contained"
        />
      </div>
    </div>
  );
};

export { CompairItem };
