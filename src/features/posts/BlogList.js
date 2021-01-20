import React from "react"
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import fetchBlogs from '../../redux/fetchBlogs';
import {connect} from "react-redux";
import FlatList from 'flatlist-react';

class BlogList extends React.Component{
    renderBlogs = ({ item,idx }) => {
        return (
            <article className="post-excerpt" key={idx}>
                <h3>VIkas</h3>
                <p className="post-content">Vikas</p>

                <Link to={`/posts/${idx}`} className="button muted-button">
                    View Post
                </Link>
            </article>
        )
    }

    render() {
        const {blogs} = this.props;
        console.log(blogs);
        return (
            <section className="posts-list">
                <h2>Posts</h2>
                <FlatList
                    list={blogs}
                    renderItem={this.renderBlogs}
                    renderWhenEmpty={() => <div>List is empty!</div>}
                />
            </section>
        )
    }
}
BlogList.propTypes = {
    blogs: PropTypes.array
};

const mapStateToProps = state => {
    const {blogs} = state;
    return {
        blogs
    };
}
export default connect(mapStateToProps, {fetchBlogs})(BlogList);
