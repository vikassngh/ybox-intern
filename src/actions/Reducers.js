import {
    FETCHING_DATA_FAILURE,
    FETCHING_DATA_REQUEST,
    FETCHING_DATA_SUCCESS,
} from "./Type";

const initialState = {
    isFetching: false,
    fetched: false,
    errorMessage: '',
    data: [],
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_DATA_REQUEST:
            return {...state, isFetching: true,fetched:false };
        case FETCHING_DATA_FAILURE:
            return {...state, isFetching: false, errorMessage: action.payload,fetched: false };
        case FETCHING_DATA_SUCCESS:

            let data = action.payload;
            if(data){
                if(data.length < 20){
                    return {...state,isFetching: false,fetched:true}
                }
                return {...state, isFetching: false, data : action.payload,fetched:true, isFetchingPaginated: false}
            }
            return {...state, isFetching: false, data: action.payload,fetched:true };
        default:
            return state;
    }
}

export default dataReducer;
