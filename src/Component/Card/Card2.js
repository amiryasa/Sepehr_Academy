
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import logo from './chat.png'
import './Card.css';


const ActionAreaCard2 = (props) => {
  return (
    <Card sx={{ maxWidth: 170 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="95"
          image={logo}
          alt="green iguana"

          style={{width: '95px', paddingTop: '25px', paddingRight: '36px'}}
        />
        <CardContent align="center" style={{ fontFamily: 'bakh', width:'170px', padding:'30px 0 15px 0'}}>
          <Typography gutterBottom variant="h5" component="div" align="center" style={{ fontFamily: 'bakh', fontSize: '23px', color:'#8130FA'}}>
            hi hi hi
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <hr style={{width: '150px', borderWidth: '1px', border: '.5px solid #8130FA', padding: '0px', marginBottom: '5px'}}></hr>
    </Card>
  );
}

export { ActionAreaCard2 };
