import { createAction } from ".";
import { userService } from "../../Services";
import { GET_USER_LOGIN } from "../Types";

export const register = (value) => {
    userService
        .SignUp(value)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
};

export const login = () => {
    return (dispatch) => {
        userService
            .SignIn()
            .then((res) => dispatch(createAction(GET_USER_LOGIN, res.data)))
            .catch((err) => console.log(err));
    };
};
