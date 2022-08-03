import { combineReducers } from "redux";
import {counterReducer} from './Reducer/Counter.reducer';


const rootReducer = combineReducers({
      counter:counterReducer
})

export default rootReducer;