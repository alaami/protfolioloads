import type { Page } from "../../domain/entities/pageEntity";
const create= (page:Page) => {
    return ({data:page.data});};

export {create}