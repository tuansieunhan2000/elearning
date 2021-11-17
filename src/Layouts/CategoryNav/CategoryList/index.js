import React from "react";
import { useDispatch } from "react-redux";
import { fetchCourseByTypeDefaul } from "../../../Redux/Actions/courseAction";
import "./main.scss";
export default function CategoryList({ item, index }) {
    const dispatch = useDispatch();
    return (
        <li className="nav-item listCategory">
            <a
                className={`nav-link ${index === 0 ? "active" : ""}`}
                id={`pills-${item.maDanhMuc}-tab`}
                data-toggle="pill"
                href={`#${item.maDanhMuc}`}
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
                onClick={() => dispatch(fetchCourseByTypeDefaul(item.maDanhMuc))}
            >
                {item.tenDanhMuc}
            </a>
        </li>
    );
}
