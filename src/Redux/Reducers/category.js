import { FETCH_CATEGORY } from "../Types";

let initialState = {
    category: [],
};

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORY:
         
            state.category = action.payload;
            return { ...state };

        default:
            return state;
    }
};
export default CategoryReducer;
