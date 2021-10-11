import { GET_MAINPAGE_DATA_REQUEST_START, GET_MAINPAGE_DATA_REQUEST_SUCCESS } from "../types"

export const getMainpageDataReqStart = ()=>{
    return {
        type:GET_MAINPAGE_DATA_REQUEST_START
    }
}
export const getMainpageDataReqSuccess = (data)=>{
    return {
        type:GET_MAINPAGE_DATA_REQUEST_SUCCESS, payload:data
    }
}