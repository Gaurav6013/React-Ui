import * as AT from '../Reducer/Actiontype'
import { BASE_URL } from '../../Shared/Url'

export const Medicinedata = () => (dispatch) =>{
      try{
        dispatch(LoadingMD())

        setTimeout( function() { 
          fetch(BASE_URL + "posts")
          .then((response) => {
            if (response.ok) {
              return response;
            } else {
              var error = new Error('An Error occurred ' + response.status + ': ' + response.statusText);
              error.response = response;
              throw error;
            }
          },
            error => {
              var errmess = new Error(error.message);
              throw errmess;
            })
          
          .then((response) => response.json())
          .then((data) =>dispatch({type : AT.GET_MEDICINE, payload:data}))
          .catch((error) =>dispatch(errorMD(error.message)))
        }, 2000)
      }
      catch(error){
        dispatch(errorMD(error.message))
      }
}

export const LoadingMD = () => (dispatch) =>{
      dispatch({
        type:AT.LOADING_MEDICINE
      });
};

export const errorMD = (error) => (dispatch)=>{
     dispatch({
        type:AT.ERROR_MEDICINE,
        playload:error
      });
};