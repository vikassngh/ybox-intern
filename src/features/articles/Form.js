import React, { Component } from "react";
import { connect } from "react-redux";

import { addArticle } from "../../redux/action";

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}

class ConnectedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        const { title} = this.state;
        this.props.addArticle({ title});
        this.setState({ title: ""});
    }
    render() {
        const { title} = this.state;
        return (
            <section>
                <h2>Add a New Post</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="postTitle">Post Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                    <button type="submit">SAVE</button>
                </form>
            </section>
        );
    }
}

const Form = connect(
    null,
    mapDispatchToProps
)(ConnectedForm);

export default Form;
