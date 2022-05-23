import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import { articleReducer } from "../../app/blog/data/redux/articleReducer";
import { categoryReducer } from "../../app/blog/data/redux/category/categoryReducer";
import { pageReducer } from "../../app/blog/data/redux/page/pageReducer";
import { serviceReducer } from "../../app/blog/data/redux/service/serviceReducer";
import { projectReducer } from "../../app/blog/data/redux/project/projectReducer";

const rootReducer = combineReducers({
  articles: articleReducer,
  categories: categoryReducer,
  page: pageReducer,
  services:serviceReducer,
  projects: projectReducer,
});

const appStoreImplementation = createStore(rootReducer, applyMiddleware(thunk));

type AppRootState = ReturnType<typeof appStoreImplementation.getState>;

export { appStoreImplementation };
export type { AppRootState };