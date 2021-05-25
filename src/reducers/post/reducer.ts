import { GET_POST } from './actions';

const INITIAL_STATE = {
  post: undefined
};

function postReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_POST: {
      return {
        ...state,
        post: action.payload.post
      };
    }
    default: {
      return state;
    }
  }
}

export default postReducer;
