import type { Page } from '../../domain/entities/pageEntity';
import axios from 'axios';
import{create} from '../models/pageModel'
const qs = require('qs');
const queryDetails = qs.stringify({
  populate: ['blocks'], 
}, {
  encodeValuesOnly: true,
});
    
function getPage(pathname:String): Promise<Page> {
     const url=`${process.env.REACT_APP_BACKEND_URL}/api${pathname}?${queryDetails}`;

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

export {getPage};