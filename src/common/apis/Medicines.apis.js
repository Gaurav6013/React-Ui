import { getRequest } from "../Request"


export const getAllMedicinesData =(path) =>{
    return getRequest("posts")
}

export const addMedicineData= (path,data) =>{
    return getRequest("posts")
}