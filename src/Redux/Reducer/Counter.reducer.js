import * as AT from './Actiontype'

const init ={
    counter:0,
};
export const counterReducer =(state=init,action) =>{
       switch (action.type) {
        case AT.INCREEMENT_COUNTE:
            return{
               ...state,
               counter:state.counter+1
            };
        case AT.DECREEMENT_COUNTE:
            return{
                ...state,
                counter:state.counter-1
            };
        default:
            return state;
       }
}