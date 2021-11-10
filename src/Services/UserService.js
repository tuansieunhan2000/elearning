import axios from "axios";
import { API_REGISTER_USER } from "../constants/api";
import * as yup from "yup";

export const signUpUserSchema = yup.object().shape({
    taiKhoan: yup.string().required("Vui lòng nhập tài khoản"),
    matKhau: yup.string().required("Vui lòng nhập mật khẩu"),
    hoTen: yup.string().required("Vui lòng nhập nhập họ tên"),
    soDT: yup
        .string()
        .matches(/^(84|0[3|5|7|8|9])+([0-9]{8})\b/)
        .required("Vui lòng nhập số điện thoại"),
    maNhom: yup.string(),
    email: yup.string().required("Vui lòng nhập tài khoản").email("Email Không hợp lệ"),
});
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
