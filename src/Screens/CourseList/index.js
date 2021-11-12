import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchCourseByType } from "../../Redux/Actions/courseAction";

export default function CourseList() {
    let maDanhMuc = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCourseByType(maDanhMuc.type));
    }, [maDanhMuc.type, dispatch]);
    return <div></div>;
}
