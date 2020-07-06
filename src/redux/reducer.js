import { COMMENTS } from "../shared/comment";
import { LEADERS } from "../shared/leader";
import { PROMOTIONS } from "../shared/promotion";

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS,
};

export const Reducer = (state = initialState, action) =>{
   return state;
};