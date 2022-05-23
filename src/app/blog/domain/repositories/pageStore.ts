import type { Page } from '../entities/pageEntity'
interface PageStore{
    // State
    page: Page | undefined;
    isLoadingPage: boolean;

    //Action
    loadPage(pathname: String): Promise<Page>; 
}
export {PageStore}