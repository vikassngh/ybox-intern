import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import dataReducer from "../actions/Reducers";

const reducer = combineReducers({
    dataReducer
});
export default createStore(reducer, applyMiddleware(thunk));
