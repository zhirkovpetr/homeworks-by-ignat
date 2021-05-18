const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'

const initState = {
    isLoading: false
};

export type InitStateType = typeof initState;

type toggleIsLoadingActionType = ReturnType<typeof toggleIsLoading>

export const loadingReducer = (state: InitStateType = initState, action: toggleIsLoadingActionType): InitStateType => {
    switch (action.type) {
        case TOGGLE_IS_LOADING: {
            return {
                ...state, isLoading: action.isLoading
            }
        }
        default:
            return state;
    }
};


export const toggleIsLoading = (isLoading: boolean) => {
    return ({
        type: TOGGLE_IS_LOADING, isLoading
    }) as const
}