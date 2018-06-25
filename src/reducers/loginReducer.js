const loginReducer = (state = [], action) => {
  switch (action.type) {
    case "LOGIN":
      return action.data;
    default:
      return state;
  }
};
export default loginReducer;
