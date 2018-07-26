import React from 'react';
import { connect } from 'react-redux';
import CreatePost from './CreatePost';

class EditExpensePage extends React.Component {
    render() {
        return (
            <CreatePost post={this.props.post} />
        );
    }
}

const mapStateToProps = (state, props) => ({
    post: state.posts.find((post) => post.id === props.match.params.id)
})

export default connect(mapStateToProps)(EditExpensePage)