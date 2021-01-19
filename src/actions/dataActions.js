import {
    FETCHING_DATA_FAILURE,
    FETCHING_DATA_REQUEST,
    FETCHING_DATA_SUCCESS
} from "./Type";

export const feed = async () => {
    try {
        const response = await fetch("https://gnews.io/api/v4/search?q=tech&token=74da443369bd202a1f3146a275d761fc", {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            }
        );
        return  await response.json();
    } catch (error) {
        return error;
    }
};


export const fetchingDataRequest = () => ({
    type:FETCHING_DATA_REQUEST
})

export const fetchingDataSuccess = (json) => ({
    type:FETCHING_DATA_SUCCESS,
    payload: json
})

export const fetchingDataFailure = (error) => ({
    type:FETCHING_DATA_FAILURE,
    payload: error
})

export const fetchData = () => {
    return async dispatch => {
        dispatch(fetchingDataRequest());
        try {
            let response = await feed('');
            dispatch(fetchingDataSuccess(response.data))
            let responseString = JSON.stringify(response.data);

        } catch (error) {
            dispatch(fetchingDataFailure(error));
        }
    };
};

