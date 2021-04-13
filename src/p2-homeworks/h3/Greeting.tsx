import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=> void // need to fix any
    addUser: (name: string)=> void // need to fix any
    error: boolean | string// need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.name // need to fix with (?:)
    const onAddUser= ()=> {addUser(name)};
    const nameError= error ? <div className={s.errorName}>{error}</div> : '';

    return (
        <div className={s.someClass}>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <button onClick={onAddUser} className={error ? s.errorButtonName : '' }>add</button>
            <span>{totalUsers}</span>
            {nameError}
        </div>
    )
}

export default Greeting
