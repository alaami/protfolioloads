import CardService from "../components/cardService"
import  Grid  from "@mui/material/Grid"
import React from "react";
const ServiceView = (homeServices: any) => {
  const services=homeServices.homeServices;
  const bgColor=homeServices.bgColor;
  const color=homeServices.color;
    return(
        <>       
        {services==undefined ? (
            <h2>Loading</h2>
        ):
        (services!=undefined)  &&  (                    
            services.map((service:any) => {
              return (
                <Grid item xs={12} md={6} key={`service__${service.attributes.slug}`}>
                  <CardService
                    service={service}
                    bgcolor={bgColor}
                    color={color}
                    key={`service__${service.attributes.slug}`}
                  />
                </Grid>
              );
            })
          )}
        </>
    );
};
export default ServiceView;