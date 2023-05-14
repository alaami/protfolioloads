import type { Menus } from '../../domain/entities/menuEntity';
import axios from 'axios';
import{create} from '../models/menuModel';


import qs from 'qs';
const query = qs.stringify({
  populate: ['menu.Menu'], 
}, {
  encodeValuesOnly: true,
});

  async function getMenus(locale:string) : Promise <Menus>{
    const url=`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/menus?&${query}&locale=${locale}`; 
    //const response = await fetch(url);
    //const menusList = await response.json();
    //return  fetch(url).then( async res => create(await res.json()));
    return axios.get(url).then(res=>create(res.data));
   //return create(await Promise.resolve(menusList));
}

export {getMenus};