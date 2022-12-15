export const initialState = {
    loading: true,
    data: [],
    error: " ",
}

export const reducer = (state = initialState, action: any) => {
    switch (action.type) {

        case "Loading": {
            return {
                loading: true,
                data: [],
                error: " ",
            }
        }

        case "FETCH_SUCCESS":{
            return{
                loading : false,
                data: action.payload,
                error :""
            }
        }

        case "FETCH_ERROR":{
            return{
                loading : false,
                data : [],
                error : "Error"
            }
        }

        default :
        return state;
    }
}