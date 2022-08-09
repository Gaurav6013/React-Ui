import { combineReducers } from "redux";
import {counterReducer} from './Reducer/Counter.reducer';
import {MedicineReducer} from './Reducer/Medicine.Reducer';


const rootReducer = combineReducers({
      counter:counterReducer,
      Medicine:MedicineReducer
})

export default rootReducer;