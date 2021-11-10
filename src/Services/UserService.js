import axios from "axios";
import { API_REGISTER_USER } from "../constants/api";

export default function UserService() {}
UserService.prototype = {
    SignUp(value) {
        return axios({
            method: "POST",
            url: API_REGISTER_USER,
            data: value,
        });
    },
};
