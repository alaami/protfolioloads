import type { Page } from '../entities/pageEntity'
interface PageStore{
    // State
    page: Page | undefined;
    isLoadingPage: boolean;

    //Action
    loadPage(pathname: string, locale:string): Promise<Page>; 
    resetPageStore():void;
}
export {PageStore}