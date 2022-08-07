import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import "./CatCard.css";

const CatCard = (props) => {

    return(

        <Card>
            <CardActionArea className="CatCardActionArea">
            <CardMedia
                component="img"
                image={props.img}
                alt="green iguana"
                style={{width: "54px", paddingTop: '20px', paddingBottom: '0px', paddingLeft: '42px'}}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" align="center"
                style={{fontFamily: "bakh", fontSize: "21px", paddingTop: '4px', marginBottom: '10px', color:"#D80101"}}
                >
                {props.title}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>

    );

}

export { CatCard };