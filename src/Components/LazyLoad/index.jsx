import React from "react";
import "./style.css";

export default function LoadingLazy() {
    return (
        <div className="lazyLoadOverlay">
            <img
                src="https://s3img.vcdn.vn/123phim/2018/09/b79ac4d8839d06c71c684398274620bd.png"
                alt=""
            />
        </div>
    );
}
