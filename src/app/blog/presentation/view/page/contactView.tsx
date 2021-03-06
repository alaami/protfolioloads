import {useEffect, useRef } from "react";

import { usePageViewModel } from "../../controller/pageViewModel";
import { usePageStoreImplementation } from "../../../data/repositories/pageStoreImplementation";
import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const ContactView = () => {
    const store = usePageStoreImplementation ();
    const pathname = useLocation().pathname;
    const firstRender = useRef(true);
    var locale="";
    
    const {
        getPage,
        page,
        isLoadingPage,
        resetPageStore,

    } = usePageViewModel(store);
    useEffect(() => {
        locale=window.localStorage.getItem('lang')!;
      }, []);
    
        useEffect(()=>{   
            if (firstRender.current) {
                resetPageStore();
                firstRender.current = false;
              }
            getPage(pathname,locale);
        },[getPage]);
    



    return(
        <div className="App">
        
        {isLoadingPage ? (
            <h1>Loading categories</h1>
        ):
        (page!=undefined)  && (    

        <><h1>{page.attributes.title}</h1><div className="uk-section">
                        <div className="uk-container uk-container-small">
                            <ReactMarkdown children={page.attributes.blocks[1].body} />
                        </div>
                    </div></>
           
          )}
       
        </div>
    );
};
export default ContactView;