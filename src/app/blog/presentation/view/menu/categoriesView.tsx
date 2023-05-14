import MenuItem from '@mui/material/MenuItem';
import  { useEffect } from "react";
import { useCategoryViewModel } from "../../controller/CategoryViewModel";
import { useCategoryStoreImplementation } from "../../../data/repositories/categoryStoreImplementation";
import Link from 'next/link';
import React from "react";
const Categories = ({ handleClose}: any, ) => {
  const store = useCategoryStoreImplementation ();
    
  const {
      getCtegories,
      categories,
      isLoadingCategories

  } = useCategoryViewModel(store);

  useEffect(()=>{
      getCtegories();

  },[]);


  return (
<>
{isLoadingCategories ? (
            <MenuItem>Loading...</MenuItem>
        ):
(categories!=undefined)  && (
                    categories.map((category:any) => {
                      return (
                            
                            <MenuItem component={Link} 
                            onClick={handleClose}  
                            href={`/article/category/${category.attributes.slug}`}
                            key= {`category__${category.attributes.slug}`}>
                           {category.attributes.name}
                            </MenuItem>
                      );
                    })
                    
     
  )}
  </>
  );
};

export default Categories;