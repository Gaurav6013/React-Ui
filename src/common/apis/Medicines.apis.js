import { deleteRequest, getRequest, postRequest, putRequest } from "../Request"


export const getAllMedicinesData =(path) =>{
    return getRequest("posts")
}

export const postMedicineData =(data) =>{
    return postRequest("posts/" , data)
}

export const deleteMedicineData = (id) =>{
    return deleteRequest("posts/" , id)
}
export const putMedicineData =(data) =>{
    return putRequest("posts/" , data)
}