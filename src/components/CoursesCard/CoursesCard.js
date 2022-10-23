import * as React from "react";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { Btn } from "../common/Button/Btn";
import * as fa from "../../constants/persianStrings"
import { GeneralContext } from "../../providers/GeneralContext"
import "./CoursesCard.css";

const CoursesCard = (props) => {
  const { language } = useContext(GeneralContext);
  const navigator = useNavigate();

  return (
    <Card sx={{ maxWidth: 345 }} className="coursesCardCard">
      <CardMedia
        className="coursesCardMedia"
        component="img"
        image={props.image}
        style={{ backgroundColor: `${props.bgColor}` }}
      />
      <div className="coursesCardRatNumHolder">

        <div className="coursesCardRate"> 3.4 </div>
        <div className="coursesCardNum"> 10 </div>

      </div>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          align="center"
          className="coursesCardTitle"
        >
          {props.title}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          align="center"
          className="coursesCardTeacher"
        >
          {props.teacher}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Btn
          text={language === 'fa' ? fa.SHOW_MORE : fa.SHOW_MORE_EN}
          elementClass="smallBtnCh"
          color={props.btnColor}
          variant="contained"
          // click='/courseDetail'
          onChange={() => {
            navigator(`/courseDetail/${props.id}`)
          }}
        />
      </CardActions>
    </Card>
  );
};

export { CoursesCard };
