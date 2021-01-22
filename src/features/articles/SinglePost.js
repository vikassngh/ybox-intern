/*
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { selectPostById } from './Posts'

export const SinglePost = () => {

    const post = useSelector((state) => selectPostById(state, 1))

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    return (
        <section>
            <article className="post">
                <h2>{post.title}</h2>
                <p className="post-content">{post.body}</p>
                <Link to={`/editPost/${post.id}`} className="button">
                    Edit Post
                </Link>
            </article>
        </section>
    )
}
*/
