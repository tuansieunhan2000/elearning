import { GET_USER_INFO, GET_USER_LOGIN } from "../Types";

let initialState = {
    userInfo: {},
    info: [],
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_LOGIN:
            state.userInfo = action.payload;

            return { ...state };
        case GET_USER_INFO:
            console.log(action.payload);
            state.info = action.payload;
        default:
            return state;
    }
};
export default UserReducer;
