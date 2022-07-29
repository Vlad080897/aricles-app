import { actions } from "../actions/actions";
import { GET_ARTICLES_REQUEST, GET_ARTICLES_SUCCESS, GET_CURRENT_ART } from "../actions/actionsNames";
import { ArticlesType } from "../types/types";

const initialState = {
  articles: [] as ArticlesType[],
  currentArticle: null as ArticlesType | null | undefined,
  loading: false
}
const articlesReducer = (state: articlesStateType = initialState, action: ActionTypes) => {
  switch (action.type) {
    case GET_ARTICLES_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case GET_ARTICLES_SUCCESS: {
      return {
        ...state,
        articles: [...action.payload],
        loading: false
      }
    }
    case GET_CURRENT_ART: {
      return {
        ...state,
        currentArticle: state.articles.find(a => a.id === action.id)
      }
    }
    default: return initialState
  }
}

type articlesStateType = typeof initialState;
type PropsType<T> = T extends { [key: string]: (...arg: any) => infer U } ? U : never;
export type ActionTypes = PropsType<typeof actions>

export default articlesReducer;