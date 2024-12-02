import axios from "axios";

export const commonAPI=async(httpmethod,url,reqBody)=>{
    let reqConfig={
        method:httpmethod,
        url,
        data:reqBody,
        headers:{ 
            "Content-Type":"application/json"
        }
    }
    return await axios(reqConfig).then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}