import React from "react";
import "./main.scss";

import { useSelector } from "react-redux";
import CategoryList from "./CategoryList";
export default function CourseTabList() {
    const categoies = useSelector((state) => state.category.category);
    console.log(categoies);
    const renderCategory = () => {
        return categoies.map((item, index) => {
            return <CategoryList item={item} index={index} key={index} />;
        });
    };
    
    return (
        <div>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                {renderCategory()}
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                >
                    ...
                </div>
                <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                >
                    ...
                </div>
                <div
                    className="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                >
                    ...
                </div>
            </div>
        </div>
    );
}
