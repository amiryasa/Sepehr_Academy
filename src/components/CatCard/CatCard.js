import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import "./CatCard.css";

const CatCard = (props) => {


    return(

        <Card className="CatCardCard" >
            <CardActionArea className={'CatCardActionArea' + props.elementClass}>
            <CardMedia
                className='CatCardMedia' 
                component="img"
                image={props.img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" align="center" className='CatCardTypography'
                style={{color:`${props.fontColor}`}}
                >
                {props.title}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>

    );

}

export { CatCard };