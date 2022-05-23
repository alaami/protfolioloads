import { getCategories } from '../../datasources/categoryAPIService';
import * as actionTypes from "./categoryActionTypes"
const getCategoriesAction =()=> (dispatch:any)=>{
dispatch({type:actionTypes.GET_CATEGORIES});

return getCategories().then((categories)=>{
    dispatch({type: actionTypes.GET_CATEGORIES_SUCCESS, categories});
    return categories;
});
};
export {getCategoriesAction}