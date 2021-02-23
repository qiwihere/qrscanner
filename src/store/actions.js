import {SET_SCAN_RESULT} from "./types";

export function setQrScanResult(result){
    return {
        type: SET_SCAN_RESULT,
        payload: result
    }
}

export function clearScanResult() {
    return {
        type: SET_SCAN_RESULT,
        payload: null
    }
}