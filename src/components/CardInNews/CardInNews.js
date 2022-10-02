import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Btn } from "./../common/Button/Btn";

import "./CardInNews.css";

const CardInNews = (props) => {
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
            {props.description}
          </Typography>
          <Typography component="div" variant="h7" className="cardInNewsDate">
            {props.date}
          </Typography>

          <div className="cardInNewsButton">
            <Btn
              text="مشاهده"
              elementClass="newsBtnCh"
              color={props.btnColor}
              variant="contained"

              click='/newsDetail'
            />
          </div>

        </CardContent>
      </Box>
    </Card>
  );
};

export { CardInNews };
