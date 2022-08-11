import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { Btn } from './../Button/Btn';

import "./CoursesCard.css"

const CoursesCard = (props) => {

  console.log(props.btnColor);
  return (
    <Card sx={{ maxWidth: 345 }} style={{height:'293px',boxShadow:"0px 3px 8px 1px rgba(0,0,0,.05)", borderRadius:'10px'}}>
      <CardMedia
        component="img"
        height="98"
        image={props.image}
        style={{backgroundColor:`${props.bgColor}`, width:'98px', padding:'16px 38px'}}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center" className="coursesCardTitle" style={{marginTop:'5px'}}>
          {props.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div" align="center" className="coursesCardTeacher" style={{marginTop:'15px'}}>
          {props.teacher}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>

        <Btn 
          text='نمایش جزئیات'
          width='118px'
          height='32px'
          fontSize='12px'
          color={props.btnColor}
        />
      
      </CardActions>
    </Card>
  );
}

export {CoursesCard};
