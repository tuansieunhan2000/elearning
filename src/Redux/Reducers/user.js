import { GET_USER_LOGIN } from "../Types";

let initialState = {
    userInfo: {},
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_LOGIN:
            state.userInfo = action.payload;

            return { ...state };
        default:
            return state;
    }
};
export default UserReducer;
