import loggedReducer from "./isLogged"; 
import counterReducer from "./counter";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    count: counterReducer,
    isLogged: loggedReducer,
})

export default allReducers;