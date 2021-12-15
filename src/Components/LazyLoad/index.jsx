import React from "react";
import "./style.css";
import loadingImg from "../../assets/img/loading.png";
export default function LoadingLazy() {
    return (
        <div className="lazyLoadOverlay">
            <img src={loadingImg} alt="" />
        </div>
    );
}
