import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../../redux/action";
import {Link} from "react-router-dom";

export class Post extends Component {

    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <section className="posts-list">
                {this.props.articles.map(el => (
                    <article className="post-excerpt" key={el.id}>
                        <h3>{el.title}</h3>
                        <p className="post-content">{el.body}</p>

                        <Link to={`/posts/${el.id}`} className="button muted-button">
                            View Post
                        </Link>
                    </article>
                ))}
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        articles: state.remoteArticles.slice(0, 10)
    };
}

export default connect(
    mapStateToProps,
    { getData }
)(Post);
