import type { Service, Services } from '../../domain/entities/serviceEntity';
import axios from 'axios';
import{create} from '../models/serviceModel'
const qs = require('qs');
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
function getServices(): Promise<Services> {
     const url=`${process.env.REACT_APP_BACKEND_URL}/api/services?${query}`;
    return axios.get(url).then(res=>create(res.data));
}


function getServiceDetails(slug:String): Promise<Services> {

  const url=`${process.env.REACT_APP_BACKEND_URL}/api/articles?${queryDetails}&filters[slug]=`+slug;

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