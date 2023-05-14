import type { Services } from '../../domain/entities/serviceEntity';
import axios from 'axios';
import{create} from '../models/serviceModel'
import qs from 'qs';
const query = qs.stringify({
  populate: ['image'], 
}, {
  encodeValuesOnly: true,
});

const queryDetails = qs.stringify({
  populate: ['cover','blocks'], 
}, {
  encodeValuesOnly: true,
});
function getServices(locale:string): Promise<Services> {
     const url=`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/services?${query}&locale=${locale}`;
    return axios.get(url).then(res=>create(res.data));
}


function getServiceDetails(slug:string): Promise<Services> {

  const url=`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles?${queryDetails}&filters[slug]=`+slug;

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

export {getServices,getServiceDetails};