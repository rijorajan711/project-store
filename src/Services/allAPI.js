import { BASE_URL } from "./Baseurl"
import { commonAPI } from "./connectionAPI"

export const registerAPI=async(user)=>{
    
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}