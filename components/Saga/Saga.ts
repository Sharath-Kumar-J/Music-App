import axios from "axios";
import { call , put , takeEvery } from "redux-saga/effects";

export function* getdata(): any {

    try {
        const res: any = yield call(axios.get, 'https://itunes.apple.com/search?term=avril+lavigne%27');
        yield put({ type: "FETCH_SUCCESS", payload: res.data })

    } catch (error) {
        yield put({ type: "FETCH_ERROR" })
        console.log(" error")
    }

}

export function* rootSaga() {
    yield takeEvery("Get_Data", getdata)
}
