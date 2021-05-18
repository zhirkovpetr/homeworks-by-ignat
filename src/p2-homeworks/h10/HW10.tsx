import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {toggleIsLoading} from "./bll/loadingReducer";
import loading from './loading.svg'

function HW10() {
    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch();

    const setLoading = () => {
        dispatch(toggleIsLoading(true))
        setTimeout(() => {
            dispatch(toggleIsLoading(false))
        }, 1000)
        console.log("loading...");
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {isLoading
                ? (
                    <div style={{marginLeft: '35px'}}><img alt={'LOADING, PLEASE WAIT'} src={loading}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
