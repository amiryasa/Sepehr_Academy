import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import './TeacherCard.css'


const TeacherCard = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }} className="teacherCardCard" >
      <CardMedia
        className="teacherCardMedia"
        component="img"
        image={props.img}
      />
      <CardContent>
        <Typography className="TeacherCardName" gutterBottom variant="h5" component="div" align="center">
          {props.name}
        </Typography>
        <hr></hr>
        <Typography  className="TeacherCardDescription" variant="body2" color="text.secondary" align="center">
          {props.description}
        </Typography>
      </CardContent>

      <div className="TeacherCardSocialHolder">
        <span></span>
        <span></span>
        <span></span>
      </div>  
    </Card>
  );
}

export {TeacherCard};
