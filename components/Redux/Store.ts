import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { reducer } from "./Reducer";
import { rootSaga } from "./Saga";

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer: reducer,
    middleware: [...getDefaultMiddleware(), sagaMiddleware]
})

sagaMiddleware.run(rootSaga)