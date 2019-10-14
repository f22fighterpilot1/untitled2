import {GET_CHECKFILES} from "../actions/types";

const initialState = {
    checkFiles: [],
    checkFile: {}
};

export default function (state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case GET_CHECKFILES:
            return {
                ...state,
                checkFiles: action.payload
            };

        default:
            return state;
    }
}