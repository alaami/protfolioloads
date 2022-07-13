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

function getProjects(pageNumber:number, pageSize:number): Promise<Projects> {
  const query = qs.stringify(
    {
      populate: ['image'],
      pagination: {
        page: pageNumber,
        pageSize: pageSize
      }
    },
    {
      encodeValuesOnly: true
    }
  );
     const url=`${process.env.REACT_APP_BACKEND_URL}/api/projects?${query}`;
    return axios.get(url).then(res=>create(res.data));
}


function getProjectDetails(slug:string): Promise<Projects> {

  const url=`${process.env.REACT_APP_BACKEND_URL}/api/projects?${queryDetails}&filters[slug]=`+slug;

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