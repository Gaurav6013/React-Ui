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
import { addDoc, collection,getDocs ,doc, deleteDoc, updateDoc } from "firebase/firestore";
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

export const DeleteData = (id) =>async(dispatch) => {
  try {
    await deleteDoc(doc(db, "Medicine",id));
    dispatch({ type: AT.DELETE_DATA, payload: id })
  } catch (error) {
    dispatch(errorMD(error.message));
  }
};

export const UpdateData = (data) => async(dispatch) => {
  console.log(data);
  try {
      const MedicineRef = doc(db, "Medicine",data.id);
      await updateDoc(MedicineRef,{
        Expiry:data.Expiry,
        Name:data.Name,
        Quantity:data.Quantity,
        price:data.price,
      });
      dispatch({ type: AT.UPDATE_DATA, payload:data })
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
