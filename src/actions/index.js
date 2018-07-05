export const LOGIN = "LOGIN";
export const APP_START = "APP_START";
export const ADD_DATA = "ADD_DATA";
export const DELETE_DATA = "DELETE_DATA";
export const UPDATE_DATA = "UPDATE_DATA";
export const SEARCH = "SEARCH";
export const START = "START";
export const ADD = "ADD";
export const EDIT = "EDIT";
export const DELETE = "DELETE";

export function appStart(data) {
  return { type: APP_START, data };
}

export function startApp(data) {
  return { type: START, data };
}

export function addItem(data) {
  return { type: ADD, data };
}

export function editItem(data) {
  return { type: EDIT, data };
}

export function deleteItem(data) {
  return { type: DELETE, data };
}

export function addData(data) {
  return { type: ADD_DATA, data };
}

export function updateData(data) {
  return { type: UPDATE_DATA, data };
}

export function deleteData(data) {
  return { type: DELETE_DATA, data };
}

export function loggedIn(data) {
  return { type: LOGIN, data };
}

export function searchIt(data) {
  return { type: SEARCH, data };
}
