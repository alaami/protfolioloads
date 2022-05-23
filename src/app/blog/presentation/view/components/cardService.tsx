import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const CardService = ({ service }:any) => {
   const imageUrl =
    process.env.NODE_ENV !== "development"
      ? service.attributes.image.data.attributes.url
      : process.env.REACT_APP_BACKEND_URL + service.attributes.image.data.attributes.url;
  return (

      <Card sx={{ maxWidth: 345, height: 420, margin:'auto', marginBottom:5, marginTop:5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {service.attributes.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {service.attributes.description}
          
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button sx={{marginTop:4, marginBottom:4}} variant="outlined">DETAILS</Button>
      </CardActions>
    </Card>
  );
};

export default CardService;