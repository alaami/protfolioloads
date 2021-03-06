import type {Articles } from '../../domain/entities/articleEntity';
import axios from 'axios';
import{create} from '../../data/models/articleModel'
import qs from 'qs';
const query = qs.stringify({
  populate: ['cover','category'], 
}, {
  encodeValuesOnly: true,
});
const queryDetails = qs.stringify({
  populate: ['cover','blocks'], 
}, {
  encodeValuesOnly: true,
});

function getArticles(pageNumber:number, pageSize:number): Promise<Articles> {
  const query = qs.stringify(
    {
      populate: ['cover','category'],
      pagination: {
        page: pageNumber,
        pageSize: pageSize
      }
    },
    {
      encodeValuesOnly: true
    }
  );
     const url=`${process.env.REACT_APP_BACKEND_URL}/api/articles?${query}`;
    return axios.get(url).then(res=>create(res.data));
}

function getArticleDetails(slug:string): Promise<Articles> {

  const url=`${process.env.REACT_APP_BACKEND_URL}/api/articles?${queryDetails}&filters[slug]=`+slug;

 return axios.get(url).then(res=>create(res.data));
}
function getArticlesByCategory(slug:string): Promise<Articles> {
  const url=`${process.env.REACT_APP_BACKEND_URL}/api/articles?${query}&filters[category][slug]=`+slug;
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

export {getArticles, getArticleDetails, getArticlesByCategory};