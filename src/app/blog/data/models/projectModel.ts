import type { Projects } from "../../domain/entities/projectEntity";
const create= (projects:Projects) => {
    return ({data:projects.data,meta:projects.meta});};
export {create}