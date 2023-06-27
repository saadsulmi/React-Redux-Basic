import { SELL_BOOK,BUY_BOOK } from "./bookType";

export const buyBook=(number=1)=>{
    return{
        type : BUY_BOOK,
        payload : number
    }
}

export const sellBook=()=>{
    return{
        type : SELL_BOOK
    }
}
