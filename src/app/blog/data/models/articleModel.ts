import type { Articles} from "../../domain/entities/articleEntity";
const create= (articles:Articles) => {
    console.log(articles.data);
    return ({data:articles.data});};
export {create}