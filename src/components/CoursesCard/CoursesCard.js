import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { Btn } from '../common/Button/Btn';

import "./CoursesCard.css"

const CoursesCard = (props) => {

  return (
    <Card sx={{ maxWidth: 345 }} className='CoursesCardCard'>
      <CardMedia
        className='CoursesCardMedia'
        component="img"
        image={props.image}
        style={{backgroundColor:`${props.bgColor}`}}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center" className="coursesCardTitle">
          {props.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div" align="center" className="coursesCardTeacher">
          {props.teacher}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>

        <Btn 
          text='نمایش جزئیات'
          elementClass='smallBtnCh'
          color={props.btnColor}
          variant="contained"
        />
      
      </CardActions>
    </Card>
  );
}

export {CoursesCard};
