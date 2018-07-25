import React from 'react';
import { connect } from 'react-redux';
import { startSetPosts } from '../actions/posts';

class DashboardPage extends React.Component {
  componentDidMount() {
    this.props.startSetPosts();
  }

  render () {
    return (
    <div className="content-container">
        <div className="form">
          <h3>Here you can browse and create your posts. Remember, your post should be pleasent to read and be as informative as possible. 
          Everybody here loves mountains and I am certain that you too! Share your passion and ideas. Together we will build
          community that certainly will enrich knowledge and passion</h3>
        </div>
    </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startSetPosts: () => dispatch(startSetPosts())
})

export default connect(undefined, mapDispatchToProps)(DashboardPage);


