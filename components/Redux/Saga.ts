import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { types } from "../Types/Types";
import { AxiosResponse } from "axios";

export function* getdata() {

    try {
        const res: AxiosResponse = yield call(axios.get, 'https://itunes.apple.com/search?term=avril+lavigne%27');
        yield put({ type: types.FETCH_SUCCESS, payload: res.data })

    } catch (error) {
        yield put({ type: types.FETCH_ERROR })
        console.log(" error")
    }

}

export function* rootSaga() {
    yield takeEvery(types.GET_DATA, getdata)
}
