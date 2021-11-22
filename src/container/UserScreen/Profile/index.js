import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetInfoUser } from "../../../Redux/Actions/userAction";

export default function ProfileScreen() {
    const dispatch = useDispatch();
    const info = useSelector((state) => state.user.info) || {};
    console.log(info);
    let accessToken = "";
    if (localStorage.getItem("userItem")) {
        accessToken = JSON.parse(localStorage.getItem("userItem")).accessToken;
    }
    useEffect(() => {
        console.log(accessToken);
        dispatch(GetInfoUser(accessToken));
    }, [accessToken]);
    return <div>ProfileScreen</div>;
}
