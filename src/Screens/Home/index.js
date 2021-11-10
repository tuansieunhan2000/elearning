import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseItem from "../../Components/CourseItem";
import { courseService } from "../../Services";
export default function HomeScreen() {
    //Get counter from counterReducer
    const course = useSelector((state) => state.course.course);
    console.log("course", course);

    //Use for all the dispatch actions
    const dispatch = useDispatch();
    useEffect(() => {
        courseService.AllCourse.then((res) =>
            dispatch({
                type: "FETCH_COURSE",
                payload: res.data,
            })
        ).catch((err) => console.log(err));
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
