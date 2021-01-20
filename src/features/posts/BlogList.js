import React from "react"
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import fetchBlogs from '../../redux/fetchBlogs';
import {connect} from "react-redux";
import {Spinner} from "reactstrap";

class BlogList extends React.Component{
    render() {
        const {blogs,pending} = this.props;
        console.log(blogs);
        if(!pending){
            return (
                <section className="posts-list">
                    <h2>Posts</h2>
                    {blogs.blogs.map(blog =>{
                        return(
                            <article className="post-excerpt" key={blog.id}>
                                <h3>{blog.title}</h3>
                                <p className="post-content">{blog.body}</p>

                                <Link to={`/posts/${blog.id}`} className="button muted-button">
                                    View Post
                                </Link>
                            </article>
                        )
                    })}
                </section>
            );
        } else {
            return (
                <Spinner color="primary" />
            )
        }
    }
}
BlogList.propTypes = {
    blogs: PropTypes.array
};

const mapStateToProps = state => {
    const {blogs,pending} = state;
    return {
        blogs,
        pending
    };
}
export default connect(mapStateToProps, {fetchBlogs})(BlogList);
