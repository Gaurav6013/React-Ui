import React from "react";
import {useDispatch,useSelector} from 'react-redux';
import{increment,decrement} from '../Redux/Action/Action';


function Counter(props){
    const dispatch = useDispatch();
    const c = useSelector(state=>state.counter);

    const handleIncre =()=>{
          dispatch(increment());
    }
    
    const handleDecre =()=>{
        dispatch(decrement());
    }
      return(
         <>
           <div className="counter">
               <button onClick={handleIncre}><span>+</span></button>
               {c.counter}
               <button onClick={handleDecre}><span>-</span></button>
           </div>
         </>
      )
} 

export default Counter;