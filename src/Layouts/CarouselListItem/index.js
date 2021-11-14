import React from "react";
import "./main.scss";
export default function CarouselListItem({ category }) {
    console.log(category);
    return (
        <section className="student_have">
            <div className="container">
                <p className="title">Some Feedbacks</p>
                <h2>What our students have to say</h2>
                <div className="have_content owl-carousel owl-theme">1</div>
            </div>
        </section>
    );
}
