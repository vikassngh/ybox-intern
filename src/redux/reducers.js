// import {FETCH_BLOGS_PENDING, FETCH_BLOGS_SUCCESS, FETCH_BLOGS_ERROR} from './action';
//
// const initialState = {
//     pending: true,
//     blogs: [],
//     error: null
// }
//
// export default function blogsReducer(state = initialState, action) {
//     switch(action.type) {
//         case FETCH_BLOGS_PENDING:
//             return {
//                 ...state,
//                 pending: true
//             }
//         case FETCH_BLOGS_SUCCESS:
//             return {
//                 ...state,
//                 pending: false,
//                 blogs: action.payload
//             }
//         case FETCH_BLOGS_ERROR:
//             return {
//                 ...state,
//                 pending: false,
//                 error: action.error
//             }
//         default:
//             return state;
//     }
// }
//
// export const getBlogs = state => state.blogs;
// export const getBlogsPending = state => state.pending;
// export const getBlogsError = state => state.error;
import { ADD_ARTICLE } from "./action-type";

const initialState = {
    articles: [],
    remoteArticles: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }

    if (action.type === "DATA_LOADED") {
        return Object.assign({}, state, {
            remoteArticles: state.remoteArticles.concat(action.payload)
        });
    }
    return state;
}

export default rootReducer;
