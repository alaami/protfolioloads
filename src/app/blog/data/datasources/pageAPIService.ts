import type { Page } from '../../domain/entities/pageEntity';
import axios from 'axios';
import{create} from '../models/pageModel'
import qs from 'qs';
const queryDetails = qs.stringify({
  populate: 'blocks.servicecard.image,blocks.sectionHeader, blocks.files,blocks.action,cover,seo,pageSettings', 
  //populate=*,blocks.servicecard
}, {
  encodeValuesOnly: true,
});
    
function getPage(pathname:string,locale:string): Promise<Page> {
     const url=`${process.env.NEXT_PUBLIC_BACKEND_URL}/api${pathname}?${queryDetails}&locale=${locale}`;

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