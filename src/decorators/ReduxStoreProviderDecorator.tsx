import {combineReducers, createStore} from "redux";
import {themeReducer} from "../p2-homeworks/h12/bll/themeReducer";
import {Provider} from "react-redux";
import React from 'react'


const reducers = combineReducers({
    theme: themeReducer
})

export const storyBookStore = createStore(reducers)

export const ReduxStoreProviderDecoration = (storyFn: ()=> React.ReactNode) => (
    <Provider
        store={storyBookStore}>{storyFn()}
    </Provider>
)
