
import {
    SET_FUNCTION,
    SET_DESC,
    SET_ADVDESC,
    SET_DATA
} from '../actions/data';

const initialState = {
    users: [],
    data: [],
    functions: [],
    descs: [],
    advdescs: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            const obj = {
                ...state,
                users: action.users,
                data: action.resData
            }
            return obj
        case SET_FUNCTION:
            return {
                state
            }
        case SET_DESC:
            return {
                state
            }
        case SET_ADVDESC:
            return {
                state
            }
    }
    return state;
};
