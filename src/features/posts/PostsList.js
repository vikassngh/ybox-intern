import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TimeAgo } from './TimeAgo'
import {connect} from "react-redux";
import {feed, fetchData} from "../../actions/dataActions";

const PostExcerpt = ({ data }) => {
    return (
        <article className="post-excerpt" key={data.id}>
            <h3>{data.title}</h3>
            <div>
                <TimeAgo timestamp={data.date} />
            </div>
            <p className="post-content">{data.content.substring(0, 100)}</p>

            <Link to={`/posts/${data.id}`} className="button muted-button">
                View Post
            </Link>
        </article>
    )
}

export const PostsList = () => {
    useEffect(() => {
        fetchData();
    }, [])

    let content;

    if (this.props.isFetching) {
        content = <div className="loader">Loading...</div>
    } else if (this.props.fetched) {
        const orderedPosts = feed()
            .slice()
            .sort((a, b) => b.date.localeCompare(a.date))

        content = orderedPosts.map((post) => (
            <PostExcerpt key={post.id} post={post} />
        ))
    } else if (this.props.errorMessage) {
        content = <div>NOTHING TO SHOW</div>
    }

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {content}
        </section>
    )
}
const mapStateToProps = state => {
    const {data, isFetching,fetched,errorMessage} = state;
    return {
        data,
        fetched,
        isFetching,
        errorMessage
    };
}
export default connect(mapStateToProps, { fetchData})(PostsList);
