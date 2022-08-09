import axios from 'axios';
import { BASE_URL } from '../Shared/Url';
 
const AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 2000,
});
  
export const sendRequest = (config) =>{
   return  AxiosInstance.request(config)
}

export const getRequest =(path) =>{
    return sendRequest({
        method:'GET',
        url:path
    })
}

export const addMedicineData = (path,data) =>{
    return sendRequest({
        method:'POST',
        body:JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
        url:path
    })
}