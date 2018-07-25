import database from '../firebase/firebase';

export const savePost = (post = {}) => ({
    type: 'SAVE_POST',
    post
})

export const startSavePost = (postData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        const post = postData;

        return database.ref(`users/${uid}/posts`).push(post).then((ref) => {
            dispatch(savePost({
                id: ref.key,
                ...post
            }));
        }).catch((e) => {
            console.log('error', e);
        });
    };
};

export const setPosts = (posts) => ({
    type: 'SET_POSTS',
    posts
  }); 
  
  
export const startSetPosts = () => {
    return(dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/posts`).once('value').then((dataSnapshot) => {
        const posts = [];
        
        dataSnapshot.forEach((childSnapshot) => {
          posts.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          })
        });
  
        dispatch(setPosts(posts));
      }).catch((e) => {
        console.log('Error occured: ', e)
      });
    }
  }