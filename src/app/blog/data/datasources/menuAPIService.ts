import type { Menus } from '../../domain/entities/menuEntity';
import axios from 'axios';
import{create} from '../models/menuModel'

const qs = require('qs');
const query = qs.stringify({
  populate: ['menu.Menu'], 
}, {
  encodeValuesOnly: true,
});
    
function getMenus(locale:String): Promise<Menus> {
     const url=`${process.env.REACT_APP_BACKEND_URL}/api/menus?&${query}&locale=${locale}`;

    return axios.get(url).then(res=>create(res.data));
}

export {getMenus};