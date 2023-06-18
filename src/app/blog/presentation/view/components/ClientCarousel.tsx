import { StyledClientItem } from "../../../../../main/utils/customStyle";
import React from "react";
import Carousel from 'react-elastic-carousel';
import CardMedia from "@mui/material/CardMedia";
export const ClientCarousel = (props: any) => {
  const items = props.clientItems;
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];
  let imageUrl = ''
  return (

    <div className="carousel-wrapper">
      <Carousel isRTL={false} breakPoints={breakPoints}>
        {items.map((item: any) => {
          imageUrl = item.attributes.url;
          return (

            <StyledClientItem key={item.id}>
              <CardMedia
               
                image={imageUrl}
                sx={{ height: '100%', width: '100%' }}
              ></CardMedia>
            </StyledClientItem>
          );
        })}
      </Carousel>
    </div>
  )
}
