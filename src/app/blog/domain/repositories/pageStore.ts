import type { Page } from '../entities/pageEntity'
interface PageStore{
    // State
    page: Page | undefined;
    isLoadingPage: boolean;

    //Action
    loadPage(pathname: String, locale:String): Promise<Page>; 
    resetPageStore():void;
}
export {PageStore}