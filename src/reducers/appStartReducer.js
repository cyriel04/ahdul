import axios from "axios";

const loginReducer = (state = [], { type, data }) => {
  switch (type) {
    case "APP_START":
      return data;
    case "ADD_DATA":
      const newId = state[Number(state.length) - 1].id + 1;
      delete data.key;
      axios.post("http://localhost:3004/posts", { id: newId, ...data });
      return state.concat({ key: newId, ...data });
    case "DELETE_DATA":
      return state;
    default:
      return state;
  }
};
export default loginReducer;
