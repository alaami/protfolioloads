import type { Page } from '../entities/pageEntity'
interface PageStore{
    // State

    //Action
    loadPage(pathname: string, locale:string): Promise<Page>; 
    //resetPageStore():void;
}
export {PageStore}