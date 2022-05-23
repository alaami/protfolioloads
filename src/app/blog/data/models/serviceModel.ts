import type { Services } from "../../domain/entities/serviceEntity";
const create= (services:Services) => {
    console.log(services.data);
    return ({data:services.data});};
export {create}