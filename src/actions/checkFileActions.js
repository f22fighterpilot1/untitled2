import axios from "axios";
import {GET_ERRORS, GET_CHECKFILES} from "./types";

export const createFile = (checkFile, history) => async dispatch => {
    try{
        const res = await axios.post("http://localhost:8080/api/check", checkFile);
        history.push("/dashboard")
    }catch(err){
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        });
    }
};

export const getCheckFiles = () => async dispatch => {
    console.log("action")
    const res = await axios.get("http://localhost:8080/api/check/all");
    console.log(res);
    dispatch ({
        type: GET_CHECKFILES,
        payload: res.data
    });
};