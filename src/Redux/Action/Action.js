import { INCREEMENT_COUNTE,DECREEMENT_COUNTE } from "../Reducer/Actiontype"

export const increment = () =>(dispatch) =>{
    dispatch({
        type:INCREEMENT_COUNTE
    });
}
export const decrement = () =>(dispatch) =>{
    dispatch({
        type:DECREEMENT_COUNTE
    });
}