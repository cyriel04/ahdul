const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case "SEARCH":
      return [action.data, ...state];
    default:
      return state;
  }
};
export default weatherReducer;
