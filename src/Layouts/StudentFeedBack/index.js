import React from "react";
import listFeedBackFromUser from "../../constants/data/listFeedBackFromUser.json";
import Carousel from "react-elastic-carousel";
import "./main.scss";
export default function FeedBackFromUser() {
    console.log(listFeedBackFromUser);
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];
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
        <section className="student_have">
            <div className="container">
                <p className="title">Some Feedbacks</p>
                <h2>What our students have to say</h2>
                <div className="have_content owl-carousel owl-theme">
                    <Carousel breakPoints={breakPoints}>{mapFeedBack()}</Carousel>
                </div>
            </div>
        </section>
    );
}
