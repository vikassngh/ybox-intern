import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import blogsReducer from "../redux/reducers";

export const store = createStore(
    blogsReducer,
    applyMiddleware(thunk)
);
