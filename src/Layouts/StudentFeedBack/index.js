import React from "react";
import listFeedBackFromUser from "../../constants/data/listFeedBackFromUser.json";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./main.scss";
export default function FeedBackFromUser() {
    console.log(listFeedBackFromUser);
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: false,
        // navText: ["Prev", "Next"],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            550: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        },
    };
    const mapFeedBack = () => {
        return listFeedBackFromUser.map((feedBackItem) => {
            return (
                <div className="card" key={feedBackItem.id}>
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={feedBackItem.img} alt="" />
                            <p>{feedBackItem.name}</p>
                        </h4>
                        <p className="card-text">{feedBackItem.description}</p>
                    </div>
                </div>
            );
        });
    };
    return (
        <div className="d-block">
            <section className="student_have">
                <div className="container">
                    <p className="title">Some Feedbacks</p>
                    <h2>What our students have to say</h2>
                    <div className="have_content">
                        <OwlCarousel {...options} className="owl-theme" loop nav margin={8}>
                            {mapFeedBack()}
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        </div>
    );
}
