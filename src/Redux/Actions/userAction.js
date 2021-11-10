import { createAction } from ".";
import { courseService } from "../../Services";
import { FETCH_COURSE } from "../Types";

export const fetchCourse = () => {
    return (dispatch) => {
        courseService
            .AllCourse()
            .then((res) => dispatch(createAction(FETCH_COURSE, res.data)))
            .catch((err) => console.log(err));
    };
};
