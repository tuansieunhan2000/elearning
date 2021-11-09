import React, { useEffect } from "react";
import CourseItem from "../../Components/CourseItem";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { API_GET_COURSES } from "../../constants/api";
export default function HomeScreen() {
    //Get counter from counterReducer
    const course = useSelector((state) => state.course.course);
    console.log("course", course);

    //Use for all the dispatch actions
    const dispatch = useDispatch();
    useEffect(() => {
        axios({
            method: "GET",
            url: API_GET_COURSES,
        })
            .then((res) =>
                dispatch({
                    type: "FETCH_COURSE",
                    payload: res.data,
                })
            )
            .catch((err) => console.log(err));
    }, []);
    return (
        <div>
            <h4 className="display-4 text-center">List Course</h4>
            <div className="container">
                <div className="row">
                    {course.map((courseItem) => {
                        return (
                            <div className="col-3">
                                <CourseItem courseItem={courseItem} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
