const loginReducer = (state = [], action) => {
  switch (action.type) {
    case "APP_START":
      return action.data;
    case "ADD_DATA":
      return state.concat({ key: action.data.id, ...action.data });
    default:
      return state;
  }
};
export default loginReducer;
