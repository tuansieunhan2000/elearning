import { GET_USER_HEADERS, GET_USER_INFO, GET_USER_LOGIN, UPDATE_USER_BY_USER } from "../Types";

let initialState = {
    userInfo: {},
    info: {},
    headers: "",
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_LOGIN:
            state.userInfo = action.payload;

            return { ...state };
        case GET_USER_INFO:
            console.log(action.payload);
            state.info = action.payload;
            return { ...state };
        case GET_USER_HEADERS:
            state.headers = action.payload;
            return { ...state };
        case UPDATE_USER_BY_USER:
            state.info = action.payload;
            return { ...state };
        default:
            return state;
    }
};
export default UserReducer;
