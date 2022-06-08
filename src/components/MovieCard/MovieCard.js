import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import"./MovieCard.scss"
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
const MovieCard = (props) => {
    const {data}=props
    console.log("homeboiz",data)
    return (
      <div class="flip-card">
      <div class="flip-card-inner">
        <div class="front">
          <img src={data.Poster} alt="" />
          
        </div>
        <div class="back">
          
          <img src={data.Poster} alt="" />
          <div className="back-icons">
            <PlayCircleFilledWhiteOutlinedIcon fontSize='large'/>
            </div>
            <div className='title'>
              <h1 className="title-text">{data.Title}</h1>
            </div>
         
        </div>
      </div>
    </div>
      
    );
};

export default MovieCard;
{/* <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="320"
            image={data.Poster}
            alt={data.Title}
          />
          <CardContent >
            <Typography gutterBottom variant="h5" component="div">
              {data.Title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.Year}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card> */}