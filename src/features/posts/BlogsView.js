import React from 'react'
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';

import fetchBlogs from '../../redux/fetchBlogs';
import {getBlogsError, getBlogs, getBlogsPending} from '../../redux/reducers';
import BlogList from "./BlogList";


class BlogsView extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentDidMount(){
        this.props.fetchBlogs();
    }

    shouldComponentRender() {
        if(this.pending === false) return false;
        return true;
    }

    render() {
        const { error } = this.props;
        let content = <BlogList/>;

        if(!this.shouldComponentRender()) return <Spinner color="primary" />

        return (
            <div className='product-list-wrapper'>
                {error && <span className='product-list-error'>{error}</span>}
                {content}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    error: getBlogsError(state),
    blogs: getBlogs(state),
    pending: getBlogsPending(state)
})

BlogsView.propTypes = {
    "fetchBlogs": PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,{fetchBlogs}
)(BlogsView );

