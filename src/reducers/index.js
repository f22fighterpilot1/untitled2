import {combineReducers} from "redux";
import errorReducer from "./errorReducer";
import CheckFileReducer from "./CheckFileReducer";

export default combineReducers({
    errors:errorReducer,
    checkFile: CheckFileReducer
});