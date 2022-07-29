import { ArticlesType } from "../types/types";
import { GET_ARTICLES_REQUEST, GET_ARTICLES_SUCCESS, GET_CURRENT_ART } from "./actionsNames";

export const actions = {
  getArtRequest: () => (
    { type: GET_ARTICLES_REQUEST }
  ) as const,
  getArtSuccess: (allArts: ArticlesType[]) => (
    {
      type: GET_ARTICLES_SUCCESS,
      payload: allArts
    } as const
  ),
  getCurrentArt: (id: string) => (
    {
      type: GET_CURRENT_ART,
      id
    } as const
  )
}