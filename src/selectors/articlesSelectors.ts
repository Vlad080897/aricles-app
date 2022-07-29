import { RootState } from "../app/store";

export const getArticlesSelector = (state: RootState) => {
    return state.articles.articles
}

export const getLoadingSelector = (state: RootState) => {
    return state.articles.loading
}

export const getCurrentSelector = (state: RootState) => {
    return state.articles.currentArticle
}