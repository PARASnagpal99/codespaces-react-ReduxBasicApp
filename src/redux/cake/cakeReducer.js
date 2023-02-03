import { BUY_CAKE } from "./cakeTypes";
//import { useEffect } from "react";

const initialState = {
    numofCakes : 10 
}


const cakeReducer = (state = initialState , action)=>{
     switch(action.type){
        case BUY_CAKE : return {
            ...state ,
            numofCakes : state.numofCakes - action.payload 
        }
        default : return state 
     }
}

export default cakeReducer 
