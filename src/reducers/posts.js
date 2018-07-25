export default (state = {}, action) => {
    switch (action.type) {
      case 'SAVE_POST':
        return [
          ...state,
          action.post
        ];
      case 'SET_POSTS': 
        return state = action.posts;
      default:
        return state;
    }
  };