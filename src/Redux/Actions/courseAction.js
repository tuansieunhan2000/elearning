import { createAction } from ".";
import { courseService } from "../../Services";
import { FETCH_DETAIL_COURCE } from "../Types";

export const fetchDetailCourse = () => {
    console.log(courseService.DetailCourse(""));
    return (dispatch) => {
        courseService
            .DetailCourse()
            .then((res) => dispatch(createAction(FETCH_DETAIL_COURCE, res.data)))
            .catch((err) => console.log(err));
    };
};
