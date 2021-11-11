import { GET_USER_LOGIN } from "../Types";

let initialState = {
    user: {
        taiKhoan: "",
        matKhau: "",
    },
};
const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_LOGIN:
            state.user = action.payload;
            return { ...state };
        default:
            return state;
    }
};
export default UserReducer;
