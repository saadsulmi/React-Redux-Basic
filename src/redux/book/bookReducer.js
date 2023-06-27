import { BUY_BOOK,SELL_BOOK } from "./bookType";

const initialState={
    bookValue:42
}

const bookReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_BOOK : 
            return{
                ...state,
                bookValue:state.bookValue-action.payload
            }
        case SELL_BOOK : 
            return{
                ...state,
                bookValue:state.bookValue+1
            }
        default : return state
    }
}

export default bookReducer