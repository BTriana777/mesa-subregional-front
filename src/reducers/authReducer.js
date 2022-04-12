import { types } from "../types/types";

const initialState = {
    logged: true,
    uidl: null,
    name: null,
    level: 0
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                logged: true
            }

        default:
            return state;
    }
}