import { types } from "../types/types";

const initialState = {
    navOpen: false
}

export const uiReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case types.uiOpenNav:
            return {
                ...state,
                navOpen: true
            }

        case types.uiCloseNav:
            return {
                ...state,
                navOpen: false
            }
    
        default:
            return state;
    }
}