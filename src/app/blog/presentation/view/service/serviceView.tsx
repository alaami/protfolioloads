import { useEffect } from "react";

import { useServiceViewModel } from "../../controller/serviceViewModel";
import { useServicesStoreImplementation } from "../../../data/repositories/serviceStoreImplementation";
import CardService from "../components/cardService"
import  Grid  from "@mui/material/Grid"
const ServiceView = ({ locale}: any) => {
    const store = useServicesStoreImplementation ();
    
    const {
        getServices,
        services,
        isLoadingServices

    } = useServiceViewModel(store);

    useEffect(()=>{
        getServices(locale);
    },[getServices,locale]);



    return(
        <>       
        {isLoadingServices ? (
            <h1>Loading</h1>
        ):
        (services!=undefined)  &&  (                    
            services.map((service:any) => {
              return (
                <Grid item xs={12} md={4} key={`service__${service.attributes.slug}`}>
                  <CardService
                    service={service}
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