import { baseURL } from "./baseURL";
import { commonAPI } from "./commonAPI";

export const adduser=async(user)=>{
    return await commonAPI('POST',`${baseURL}/employee`,user)
}
export const getuser=async()=>{
    return await commonAPI('GET',`${baseURL}/employee`,'')
}
export const deleteuser=async(id)=>{
    return await commonAPI('DELETE',`${baseURL}/employee/${id}`,{})
}
export const editUser=async(id,user)=>{
    return await commonAPI('PUT',`${baseURL}/employee/${id}`,user)
}