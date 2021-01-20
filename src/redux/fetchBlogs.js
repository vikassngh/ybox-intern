import {fetchBlogsPending, fetchBlogsSuccess, fetchBlogsError} from './action';

function fetchBlogs() {
    return dispatch => {
        dispatch(fetchBlogsPending());
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                dispatch(fetchBlogsSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(fetchBlogsError(error));
            })
    }
}

export default fetchBlogs;
