import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from '@mui/material/CardActions';
import { Btn } from "./../common/Button/Btn";

import "./CardInCourses.css";

const CardInCourses = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }} className='cardIncoursesCardCard'>
    <CardMedia
      className='cardIncoursesCardMedia'
      component="img"
      image={props.image}
      style={{backgroundColor:`${props.bgColor}`}}
      
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" align="center" className="cardIncoursesCardTitle">
        {props.title}
      </Typography>
      <Typography gutterBottom variant="h5" component="div" align="center" className="cardIncoursesCardTeacher">
        {props.teacher}
      </Typography>
      <Typography gutterBottom variant="h5" component="div" align="center" className="cardIncoursesCardCost">
        000 150 ت
      </Typography>
    </CardContent>
    <CardActions sx={{ justifyContent: "center" }}>

      <Btn 
        text='مشاهده'
        elementClass='coursesBtnCh'
        color={props.btnColor}
        variant="contained"
      />
    
    </CardActions>
  </Card>
  );
};

export { CardInCourses };