import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC, RequestThemesType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];


function HW12() {
    const theme = useSelector<AppStoreType, RequestThemesType>((state) => state.theme.isTheme)
    const dispatch = useDispatch()

    const onChangeCallback= (isTheme: RequestThemesType)=>{
        dispatch(changeThemeAC(isTheme))
    }

    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                 <div>
                <SuperRadio
                    name={'radio'}
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeCallback}
                />
            </div>
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
