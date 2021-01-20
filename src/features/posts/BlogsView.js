import React from 'react'
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import fetchBlogs from '../../redux/fetchBlogs';
import {getBlogsError, getBlogs, getBlogsPending} from '../../redux/reducers';
import BlogList from "./BlogList";


class BlogsView extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchBlogs();
    }

    shouldComponentRender() {
        const {pending} = this.props;
        if(this.pending === false) return false;
        return true;
    }

    render() {
        const { error } = this.props;
        let content = <BlogList/>;

        // if(!this.shouldComponentRender()) return <LoadingSpinner />

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

