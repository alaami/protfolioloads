import type { PageStore } from "../../repositories/pageStore";


type ResetPageStore= Pick <PageStore, "resetPageStore">;

const resetPageStoreUseCase= (store: ResetPageStore)=>{
    store.resetPageStore();
};

export {resetPageStoreUseCase};