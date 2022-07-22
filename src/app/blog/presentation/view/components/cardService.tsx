import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from "react-router-dom";
import { StyledButton,StyledServiceCardMedia } from "../../../../../main/utils/customStyle";

const CardService = ({ service }:any) => {
   const imageUrl = service.attributes.image.data.attributes.url;
  return (

    <Card sx={{ maxWidth: 345, height: 470, marginBottom: 5 }}>
      <CardActionArea>
        <StyledServiceCardMedia
          image={imageUrl}
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