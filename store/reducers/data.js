
import {
    SET_DATA
} from '../actions/data';

const initialState = {
    data: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            const obj = {
                data: action.resData
            }
            return obj
    }
    return state;
};
