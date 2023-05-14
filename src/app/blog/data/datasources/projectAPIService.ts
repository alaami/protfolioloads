import type { Project, Projects } from '../../domain/entities/projectEntity';
import axios from 'axios';
import{create} from '../models/projectModel'
import qs from 'qs';
const query = qs.stringify({
  populate: ['image'], 
}, {
  encodeValuesOnly: true,
});

const queryDetails = qs.stringify({
  populate: 'blocks.files,image,cover,blocks.buttons', 
}, {
  encodeValuesOnly: true,
});

function getProjects(locale: string): Promise<Projects> {
  const query = qs.stringify(
    {
      populate: ['image'],
    },
    {
      encodeValuesOnly: true
    }
  );
     const url=`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects?${query}&locale=${locale}`;
    return axios.get(url).then(res=>create(res.data));
}


function getProjectDetails(slug:string,locale: string): Promise<Projects> {

  const url=`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects?${queryDetails}&filters[slug]=${slug}&locale=${locale}`;

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

export {getProjects,getProjectDetails};