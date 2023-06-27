import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import bookReducer from "./book/bookReducer";
import userReducer from "./user/userReducer";


const rootReducer = combineReducers({
    cake : cakeReducer,
    book : bookReducer,
    user : userReducer
})

export default rootReducer;