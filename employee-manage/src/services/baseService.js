import axios from "axios"


export const fetchGetAll = async(controller) =>{
     const response = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/${controller}/all`);
     return response.data
}
export const fetchGetSingle = async(controller, id) =>{
     const response = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/${controller}/single/${id}`);
     return response.data
}
export const fetchAdd = async(controller, value) =>{
     const response = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/${controller}/add`, value);
     return response.data
}
export const fetchUpdate = async(controller, value) =>{
     const response = await axios.put(`${process.env.REACT_APP_BASE_ENDPOINT}/${controller}/update`, value);
     return response.data
}
export const fetchDelete = async(controller, id) =>{
     const response = await axios.delete(`${process.env.REACT_APP_BASE_ENDPOINT}/${controller}/delete/${id}`, );
     return response.data
}