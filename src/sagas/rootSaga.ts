import { all } from 'redux-saga/effects'
import { articlesSaga } from './articlesSaga'

export function* rootSaga() {
    yield all([
        articlesSaga(),
    ])
}