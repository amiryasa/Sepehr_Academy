import React from "react";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
import ArrowCircleDownRoundedIcon from "@mui/icons-material/ArrowCircleDownRounded";
import CloseIcon from '@mui/icons-material/Close';
import { Progressbar } from "../Progressbar/Progressbar";
import { Btn } from "../common/Button/Btn";
import "./CompairItem.css";

const CompairItem = (props) => {
  const selectIcon = {};

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
      <div onClick={() => {
        props.removeCourseInCompair(props.couurseInfo.id)
      }}>
        <CloseIcon
          className="close_btn"
        />
      </div>
      <div className="CompairItemCenter">
        <img src={props.couurseInfo.image} alt="course" />
        <p className="CompairItemTitle">{props.couurseInfo.title}</p>
        <p className="CompairItemTeacher">{props.couurseInfo.teacher}</p>
      </div>

      <div className="CompairItemElement">
        <p className="CompairItemElementTitle">قیمت:</p>
        <p className="CompairItemElementCount">{props.couurseInfo.cost > 0 ? `${props.couurseInfo.cost} ت` : 'رایگان!'}</p>
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
        <p className="CompairItemElementCount">{props.couurseInfo.section} ماه</p>
        <div>{selectIcon.section}</div>
      </div>
      <hr></hr>

      <div className="CompairItemprogressbar01">
        <Progressbar
          capacity={(counter / 5) * 100}
          message="فاکتورهای برتر"
          size={315}
          tooltiveMes={`${counter}/5`}
          type="compair"
        ></Progressbar>
      </div>

      <div className="CompairItemprogressbar02">
        <Progressbar
          capacity={(counter / 5) * 100}
          message="فاکتورهای برتر"
          size={270}
          tooltiveMes={`${counter}/5`}
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
          onChange={() => {
            props.AddCourseToShop(props.couurseInfo.id)
          }}
        />
      </div>
    </div>
  );
};

export { CompairItem };
