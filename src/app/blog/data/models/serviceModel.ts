import type { Services } from "../../domain/entities/serviceEntity";
const create= (services:Services) => {
    return ({data:services.data});};
export {create}