import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCourseByTypeDefaul } from "../../../Redux/Actions/courseAction";

export default function CategoryList({ item }) {
    const [category, setCategory] = useState(item.maDanhMuc);

    console.log("CategoryList");
    const dispatch = useDispatch();
    return (
        <li className="nav-item">
            <a
                className="nav-link"
                id={`pills-${item.maDanhMuc}-tab`}
                data-toggle="pill"
                href={`#${item.maDanhMuc}`}
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
                onClick={() => dispatch(fetchCourseByTypeDefaul(item.maDanhMuc))}
            >
                {item.maDanhMuc}
            </a>
        </li>
    );
}
