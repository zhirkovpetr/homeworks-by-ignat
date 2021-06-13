export type RequestThemesType= 'dark' | 'red' | 'some'

const initState = {
   isTheme: 'some' as RequestThemesType
};
export type initialStateType= typeof initState;

export type setThemeAT= ReturnType<typeof changeThemeAC>
type ActionsType = setThemeAT

export const themeReducer = (state:initialStateType = initState, action: ActionsType): initialStateType => { // fix any
    switch (action.type) {
        case 'THEME/SET-Theme': {
            return {...state, isTheme: action.isTheme};
        }
        default: return state;
    }
};

export const changeThemeAC = (isTheme: RequestThemesType) => ({type: 'THEME/SET-Theme', isTheme} as const)