import { BASE_URL } from "./Baseurl"
import { commonAPI } from "./connectionAPI"

export const registerAPI=async(user)=>{
    
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}

export const logAPI= async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
}


export const addProjectAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/project/add`,reqBody,reqHeader)
}