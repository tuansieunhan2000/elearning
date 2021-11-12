import { createAction } from ".";
import { categoryService } from "../../Services";
import { FETCH_CATEGORY } from "../Types";

export const fetchCategory = (id) => {
    return (dispatch) => {
        categoryService
            .FetchCategory()
            .then((res) => dispatch(createAction(FETCH_CATEGORY, res.data)))
            .catch((err) => console.log(err));
    };
};
