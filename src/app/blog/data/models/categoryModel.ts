import type { Categories } from "../../domain/entities/categoryEntity";
const create= (categories:Categories) => {
    return ({data:categories.data});};

export {create}