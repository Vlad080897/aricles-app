import { put, takeEvery } from 'redux-saga/effects';
import { actions } from '../actions/actions';
import { GET_ARTICLES } from '../actions/actionsNames';
import { articlesApi } from '../api/articlesApi';
import { ArticlesType } from '../types/types';
import {v4 as uuid} from 'uuid'

const request = async () => {
    const response: string[] = await articlesApi.getArt();
    const allArt = response.map((art: string, index) => {
        return {
            id: uuid(),
            description: art
        }
    })
    return allArt;
}

function* getArticles(action: GetMoreAction) {
    yield put(actions.getArtRequest());
    const allArt: ArticlesType[] = yield request();
    yield put(actions.getArtSuccess([...action.current, ...allArt]));
}

export function* articlesSaga() {
    yield takeEvery(GET_ARTICLES, getArticles);
}

interface GetMoreAction {
    type: string,
    current: ArticlesType[]
}