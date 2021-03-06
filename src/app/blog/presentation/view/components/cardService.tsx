import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from "react-router-dom";
import { StyledButton } from "../../../../../main/utils/customStyle";

const CardService = ({ service }:any) => {
   const imageUrl =
    process.env.NODE_ENV !== "development"
      ? service.attributes.image.data.attributes.url
      : process.env.REACT_APP_BACKEND_URL + service.attributes.image.data.attributes.url;
  return (

    <Card sx={{ maxWidth: 345, height: 470, marginBottom: 5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" sx={{ fontWeight: 'bold' }} component="div">
            {service.attributes.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {service.attributes.description}

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link style={{ textDecoration: 'none' }}
          to={`/about`}
        >
          <StyledButton variant="outlined">DETAILS</StyledButton>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardService;