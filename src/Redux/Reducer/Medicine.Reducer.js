import * as AT from "./Actiontype";
const initVal={
    isLoading:false,
    MD:[],
    error:''
}

export const MedicineReducer = (state=initVal,action) =>{
      switch (action.type) {
        case AT.GET_MEDICINE:
            return{
                ...state,
                isLoading:false,
                MD:action.payload
            }
        case AT.LOADING_MEDICINE:
            return{
                ...state,
                isLoading:true,
                error:""
            }
        case AT.ERROR_MEDICINE:
            return{
                ...state,
                isLoading:false,
                error:action.payload
            }
      
        default:
            return state;
      }
}