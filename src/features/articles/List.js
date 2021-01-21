import React from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";

const mapStateToProps = state => {
    return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
    <section className="posts-list">
        {articles.map(el => (
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

const List = connect(mapStateToProps)(ConnectedList);

export default List;
