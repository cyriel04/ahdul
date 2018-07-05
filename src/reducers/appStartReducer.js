import axios from "axios";

const loginReducer = (state = [], { type, data }) => {
  switch (type) {
    case "APP_START":
      return data;

    case "ADD_DATA":
      const newId = state[Number(state.length) - 1].id + 1;
      delete data.key;
      axios.post("http://localhost:3000/posts", { id: newId, ...data });
      return state.concat({ key: newId, id: newId, ...data });

    case "UPDATE_DATA":
      const URL = "http://localhost:3000/posts/" + data.id;
      axios.put(URL, {
        ...data
      });
      const objIndex = state.findIndex(obj => obj.id === data.id);
      const newState = [
        ...state.slice(0, objIndex),
        { key: data.id, ...data },
        ...state.slice(objIndex + 1, state.length)
      ];
      return newState;

    case "DELETE_DATA":
      axios.delete("http://localhost:3000/posts/" + data);
      return state.filter(event => {
        return event.id !== data;
      });

    default:
      return state;
  }
};
export default loginReducer;
