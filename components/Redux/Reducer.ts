import { types } from "../Types/Types"
import { Interreducer } from "../Interfaces/Interface"

export const initialState = {
    loading: true,
    data: [],
    error: " ",
    stored_data: " ",
}

export const reducer = (state = initialState, action: Interreducer) => {
    switch (action.type) {

        case types.LOADING: {
            return {
                loading: true,
                data: [],
                error: " ",
            }
        }

        case types.FETCH_SUCCESS: {
            return {
                loading: false,
                data: action.payload,
                error: ""
            }
        }

        case types.FETCH_ERROR: {
            return {
                loading: false,
                data: [],
                error: "Error"
            }
        }
        case types.STORED_DATA: {
            return {
                ...state,
                stored_data: action.payload,
            }
        }

        default:
            return state;
    }
}