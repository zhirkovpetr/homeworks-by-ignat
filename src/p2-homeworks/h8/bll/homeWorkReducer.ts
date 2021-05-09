import {UserType} from "../HW8";


type sortUsersActionType = ReturnType<typeof sortAC>
type checkUsersActionType = ReturnType<typeof checkAC>

export const sortAC=(direction:string)=>{
    return {
       type: 'sort',  payload: direction
    }
}

export const checkAC=(Age:number)=>{
    return {
        type: 'check',  payload: Age
    }
}

export type ActionsTypes = sortUsersActionType | checkUsersActionType

export const homeWorkReducer = (state: UserType[], action: ActionsTypes): UserType[] => {
    switch (action.type) {
        case 'sort': {
            const copyState = [...state]
            copyState.sort((a, b) => {
                if(a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })
            return action.payload === 'up' ? copyState : copyState.reverse()
        }
        case 'check': {
            const copyState = [...state]
            return copyState.filter((u)=> u.age>=18)
        }
        default: return state
    }
}