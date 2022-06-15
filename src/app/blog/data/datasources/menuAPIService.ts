import type { PrimaryMenu } from '../../domain/entities/menuEntity';
import axios from 'axios';
import{create} from '../models/menuModel'

const qs = require('qs');
const query = qs.stringify({
  sort: ['order:asc']
}, {
  encodeValuesOnly: true,
});
    
function getMenus(): Promise<PrimaryMenu> {
     const url=`${process.env.REACT_APP_BACKEND_URL}/api/menus/primary-menu?nested&${query}`;

    return axios.get(url).then(res=>create(res.data));
}

export {getMenus};