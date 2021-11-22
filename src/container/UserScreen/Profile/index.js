import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetInfoUser } from "../../../Redux/Actions/userAction";

export default function ProfileScreen() {
    const dispatch = useDispatch();

    const info = useSelector((state) => state.user.info) || {};
    console.log(info);

    useEffect(() => {
        if (localStorage.getItem("userItem")) {
            let accessToken = JSON.parse(localStorage.getItem("userItem")).accessToken;
            let taiKhoan = JSON.parse(localStorage.getItem("userItem")).taiKhoan;

            dispatch(GetInfoUser(accessToken, taiKhoan));
        }
    }, [dispatch]);
    return <div>ProfileScreen</div>;
}
