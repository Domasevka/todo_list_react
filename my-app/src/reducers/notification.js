const notification = (state = '', action) => {

  if (action.type === 'ADD_SUCCESS_NOTIFICATION') {
    return action.payload;
  }else if (action.type === 'REMOVE_NOTIFICATION') {
    return '';
  }
  return state;
};

export default notification