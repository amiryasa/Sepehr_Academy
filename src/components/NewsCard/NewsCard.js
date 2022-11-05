import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import './NewsCard.css';
import { GeneralContext } from '../../providers/GeneralContext';

const NewsCard = (props) => {
  const { themePage } = React.useContext(GeneralContext)
  const navigator = useNavigate();

  return (
    <Card sx={{ display: 'flex' }} className="newsCardCard" onClick={() => navigator('/newsDetail')}>
      <CardMedia
        component="img"
        image={props.image}
        className="newsCardMedia"
      />
      <hr></hr>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography
            component="div"
            variant="h5"
            className={`newsCardTitle ${themePage === 'light' ? 'lightColorNews' : 'darkColorNews'}`}>
            {props.title}
          </Typography>
          <Typography 
          variant="subtitle1" 
          color="text.secondary" 
          component="div" 
          className="newsCardDescription">
          {`${props.description.slice(0, 45)} ...`}
          </Typography>
          <Typography 
          component="div" 
          variant="h7" 
          className="newsCardDate">
          {props.category}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export { NewsCard };
