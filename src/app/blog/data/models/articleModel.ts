import type { Articles} from "../../domain/entities/articleEntity";
const create= (articles:Articles) => {
    return ({data:articles.data,meta:articles.meta});};
export {create}