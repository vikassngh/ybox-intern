export const FETCH_BLOGS_PENDING = 'FETCH_BLOGS_PENDING';
export const FETCH_BLOGS_SUCCESS = 'FETCH_BLOGS_SUCCESS';
export const FETCH_BLOGS_ERROR = 'FETCH_BLOGS_ERROR';

export function fetchBlogsPending() {
    return {
        type: FETCH_BLOGS_PENDING
    }
}

export const fetchBlogsSuccess = blogs => ({
    type: FETCH_BLOGS_SUCCESS,
    payload: { blogs }
});

export function fetchBlogsError(error) {
    return {
        type: FETCH_BLOGS_ERROR,
        error: error
    }
}
