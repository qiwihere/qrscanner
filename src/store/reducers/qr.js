import {SET_SCAN_RESULT} from "../types";

const initialState = {
    result: null
}

export const qrReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SCAN_RESULT:
            return {
                ...state,
                result: action.payload
            }
        default: return state
    }
}