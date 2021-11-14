import React from "react";

export default function CategoryList({ item }) {
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
            >
                {item.maDanhMuc}
            </a>
        </li>
    );
}
