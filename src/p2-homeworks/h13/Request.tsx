import React, {useEffect, useState} from "react";
import {requestsAPI} from "./api/RequestsAPI";


export const Request = () => {
    const [information, setInformation]= useState<string>('')
    const [checked, setChecked] = useState<boolean>(false)

    const setCheckBox = () => {
        setChecked(!checked)
    }

    useEffect(() => {
        requestsAPI.post(checked)
            .then((res) => {
                setInformation(res.data.errorText)
                //console.log(res.data)
            })
            .catch(error => {
                //console.log({...error});
                setInformation(error.response ? error.response.data.errorText : error.message);
            })
    }, [checked])

    return (
        <div>
            <div><input type={'checkbox'} checked={checked} onChange={setCheckBox}/></div>
            <div>{JSON.stringify(information)}</div>
            <div>
                <button onClick={setCheckBox}>push</button>
            </div>
        </div>
    );
}
