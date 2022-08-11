import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import "./CatCard.css";

const CatCard = (props) => {

    return(

        <Card style={{boxShadow:"0px 3px 8px 1px rgba(0,0,0,.08)"}}>
            <CardActionArea className="CatCardActionArea" style={{height:`${props.height}`}}>
            <CardMedia
                component="img"
                image={props.img}
                style={{width:`${props.width}`, padding:`${props.padding}`}}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" align="center" className="CatCardTypography"
                style={{color:`${props.fontColor}`, paddingTop:`${props.fontToppadding}`}}
                >
                {props.title}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>

    );

}

export { CatCard };