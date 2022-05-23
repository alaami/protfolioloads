import type { Projects } from "../../domain/entities/projectEntity";
const create= (projects:Projects) => {
    console.log(projects.data);
    return ({data:projects.data});};
export {create}