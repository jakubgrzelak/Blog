import React from 'react'; 
import { connect } from 'react-redux';
import UserPost from './UserPost';
import { startSetPosts } from '../actions/posts';

class UserPostsList extends React.Component {
    componentDidMount() {
        this.props.startSetPosts();
    }
    render () {
        return (
            <div className="content-container">
            {
                this.props.posts.length === 0 ? (
                  <div  >
                    <span>No posts</span>
                  </div>
              
                ) : (
                    this.props.posts.map((post) => {
                      return <UserPost key={post.id} {...post} />;
                    })
                  )
            }
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    posts: state.posts
});

const mapDispatchToProps = (dispatch) => ({
    startSetPosts: () => dispatch(startSetPosts())
  })

  
export default connect(mapStateToProps, mapDispatchToProps)(UserPostsList);