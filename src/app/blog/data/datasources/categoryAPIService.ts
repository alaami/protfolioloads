import type { Categories } from '../../domain/entities/categoryEntity';
import axios from 'axios';
import{create} from '../models/categoryModel'


    
function getCategories(): Promise<Categories> {
     const url=`${process.env.REACT_APP_BACKEND_URL}/api/categories`;

    return axios.get(url).then(res=>create(res.data));
}
/*   async getEventSingle(eventId, accessToken) {
    let res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/article/` + eventId,{
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return res.data;
  } */

export {getCategories};