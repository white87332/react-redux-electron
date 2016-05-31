import React, { Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import * as postsActions from '../../actions/postsActions';
import { connect } from 'react-redux';


function mapStateToProps(state)
{
    return {
        posts: state.posts
    };
}

function mapDispatchToProps(dispatch)
{
    return {
        dispatch,
        postsActions
    };
}

class Posts extends Component
{
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        const { dispatch, postsActions } = this.props;
        dispatch(postsActions.postsList());
    }

    render()
    {
        const { posts } = this.props;

        let items = posts.list.map((data, key) => {
            return <div key={key}>{data.title}</div>;
        });

        return (
            <div>
               {items}
             </div>
        );
    }
}

Posts.propTypes = {
    posts: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
