import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from '../h6/common/c4-SuperEditableSpan/SuperEditableSpan.module.css'


function HW6() {
    const [value, setValue] = useState<string>('')
    const error = value ? '' : 'error'

    const save = () => {
        saveState<string>('editable-span-value', value)

    }
    const restore = () => {
        const state: string = restoreState<string>('editable-span-value', value)
        setValue(state)
    }

    return (
        <div>
            <hr/>
            homeworks 6

            {/*should work (должно работать)*/}
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? '' : 'enter text...'}}
                    error={error}
                />
            </div>
            <SuperButton disabled={value === ''} onClick={save}>save</SuperButton>
            <SuperButton disabled={value === ''} onClick={restore}>restore</SuperButton>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
