import { createAction } from ".";
import { userManagerService } from "../../Services";
import { FETCH_USER_LIST_PER_PAGE } from "../Types";

export const fetchUserPerPage = (paranms) => {
    return (dispatch) => {
        userManagerService
            .fetchListUserPerPage(paranms)
            .then((res) => {
                dispatch(createAction(FETCH_USER_LIST_PER_PAGE, res.data));
            })
            .catch((err) => console.log(err));
    };
};
