import {FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, fetchDataRequest} from "./Actions";

export const GET_UPN = "GET_UPN"

const defaultState = {
    data: {
        name: 'noose'
    },
    loading: false,
    error: null
}

const apiReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        default:
            return state
    }
}

export default apiReducer