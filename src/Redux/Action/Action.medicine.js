import * as AT from "../Reducer/Actiontype";
import {
  addMedicineData,
  deleteMedicineData,
  getAllMedicinesData,
  postMedicineData,
  putMedicineData,
} from "../../common/apis/Medicines.apis";
import { BASE_URL } from "../../Shared/Url";
import axios from "axios";
import { addDoc, collection,getDocs  } from "firebase/firestore";
import { dblClick } from "@testing-library/user-event/dist/click";
import { db } from "../../firebase";

export const Medicinedata = () => async (dispatch) => {
  try {
    dispatch(LoadingMD());
    const data=[];
    const querySnapshot = await getDocs(collection(db, "Medicine"),data);
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      data.push({id:doc.id,...doc.data()})
      
    });
    dispatch({ type: AT.GET_MEDICINE, payload:data });
    //   setTimeout( function() {

    //  getAllMedicinesData()
    //  .then((data) =>dispatch({type : AT.GET_MEDICINE, payload:data.data}))
    //  .catch((error) =>dispatch(errorMD(error.message)))
    // .catch((error) =>dispatch(errorMD(error.message)))
    // fetch(BASE_URL + "posts")
    // .then((response) => {
    //   if (response.ok) {
    //     return response;
    //   } else {
    //     var error = new Error('An Error occurred ' + response.status + ': ' + response.statusText);
    //     error.response = response;
    //     throw error;
    //   }
    // },
    //   error => {
    //     var errmess = new Error(error.message);
    //     throw errmess;
    //   })

    // .then((response) => response.json())
    // .then((data) =>dispatch({type : AT.GET_MEDICINE, payload:data}))
    //     // .catch((error) =>dispatch(errorMD(error.message)))
    //   }, 2000)
  } catch (error) {
    dispatch(errorMD(error.message));
  }
};

export const AddData = (data) => async (dispatch) => {
  console.log(data);
  try {
    //   postMedicineData(data);
    const docRef = await addDoc(collection(db, "Medicine"), data);
   //  console.log("Document written with ID: ", { id: docRef.id, data });
    dispatch({ type: AT.ADD_MEDICINE, payload: { ...data, id: docRef.id } });
  } catch (error) {
    dispatch(errorMD(error.message));
  }
};

export const DeleteData = (id) => (dispatch) => {
  try {
    deleteMedicineData(id).then(
      dispatch({ type: AT.DELETE_DATA, payload: id })
    );
    // fetch(BASE_URL + "posts/" + id,{
    //   method:"DELETE",
    // })
    // .then((response) => {
    //   if (response.ok) {
    //     return response;
    //   } else {
    //     var error = new Error('An Error occurred ' + response.status + ': ' + response.statusText);
    //     error.response = response;
    //     throw error;
    //   }
    // },
    //   error => {
    //     var errmess = new Error(error.message);
    //     throw errmess;
    //   })
    // .then((response) => response.json())
    // .then(dispatch({type :AT.DELETE_DATA, payload:id}))
  } catch (error) {
    dispatch(errorMD(error.message));
  }
};

export const UpdateData = (data) => (dispatch) => {
  console.log(data);
  try {
    putMedicineData(data).then((data) =>
      dispatch({ type: AT.UPDATE_DATA, payload: data.data })
    );
    // fetch(BASE_URL + "posts/" + data.id,{
    //   method:"PUT",
    //   body:JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    // .then((response) => {
    //   if (response.ok) {
    //     return response;
    //   } else {
    //     var error = new Error('An Error occurred ' + response.status + ': ' + response.statusText);
    //     error.response = response;
    //     throw error;
    //   }
    // },
    //   error => {
    //     var errmess = new Error(error.message);
    //     throw errmess;
    //   })
    // .then((response) => response.json())
    // .then((data) =>dispatch({type :AT.UPDATE_DATA, payload:data}))
  } catch (error) {
    dispatch(errorMD(error.message));
  }
};
export const LoadingMD = () => (dispatch) => {
  dispatch({
    type: AT.LOADING_MEDICINE,
  });
};

export const errorMD = (error) => (dispatch) => {
  dispatch({
    type: AT.ERROR_MEDICINE,
    playload: error,
  });
};
