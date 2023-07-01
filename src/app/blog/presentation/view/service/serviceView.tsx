import { Box } from "@mui/material";
import CardService from "../components/cardService"
import  Grid  from "@mui/material/Grid"
import React from "react";
const ServiceView = (homeServices: any) => {
  const services=homeServices.homeServices;
  const bgColor=homeServices.bgColor;
  const color=homeServices.color;
    return(
      <Box className="serviceList">       
        {services==undefined ? (
            <h2>Loading</h2>
        ):
        (services!=undefined)  &&  (                    
            services.map((service:any) => {
              return (

                  <CardService
                    service={service}
                    bgcolor={bgColor}
                    color={color}
                    key={`service__${service.attributes.slug}`}
                  />
               
              );
            })
          )}
         </Box>
    );
};
export default ServiceView;