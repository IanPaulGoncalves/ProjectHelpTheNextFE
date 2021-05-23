const INITIAL_STATE = {
  user: null
};

function accountReducer(state = INITIAL_STATE, action) {
  if (action.type === 'LOGIN_SUCESS') {
    return {
      ...state,
      user: action.payload.user
    };
  }
  return state;
}

export default accountReducer;
