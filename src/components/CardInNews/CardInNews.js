import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Btn } from "./../common/Button/Btn";

import "./CardInNews.css";

const CardInNews = (props) => {
  const navigator = useNavigate();
  return (
    <Card sx={{ display: "flex" }} className="cardIncardInNews">
      <CardMedia
        component="img"
        image={props.image}
        className="cardInNewsMedia"
      />
      <hr></hr>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5" className="cardInNewsTitle">
            {props.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            className="cardInNewsDescription"
          >
            {props.description.slice(0,50) + '...'}
          </Typography>
          <Typography component="div" variant="h7" className="cardInNewsDate">
            {props.category}
          </Typography>

          <div className="cardInNewsButton">
            <Btn
              text="مشاهده"
              elementClass="newsBtnCh"
              color={props.btnColor}
              variant="contained"

              onChange={() => {
                console.log(1);
                navigator(`/newsDetail/${props.id}`)
              }}
            />
          </div>

        </CardContent>
      </Box>
    </Card>
  );
};

export { CardInNews };
