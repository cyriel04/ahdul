import axios from "axios";

export const LOGIN = "LOGIN";
export const APP_START = "APP_START";
export const ADD_DATA = "ADD_DATA";
export const DELETE_DATA = "DELETE_DATA";

export function appStart(data) {
  return { type: APP_START, data };
}

export function addData(data) {
  return { type: ADD_DATA, data };
}

export function deleteData(data) {
  return { type: DELETE_DATA, data };
}

export function loggedIn(data) {
  return { type: LOGIN, data };
}
