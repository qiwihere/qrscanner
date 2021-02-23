import React from "react";
import {Row} from "react-grid-system";
import {useDispatch, useSelector} from "react-redux";
import {clearScanResult} from "../../store/actions";

const ScanResult = () => {
    const scanResult = useSelector(state=>state.qr.result)
    const dispatch = useDispatch()
    return <>
        <Row>
            Scan result: {scanResult}
        </Row>
        <Row>
            <button onClick={()=>dispatch(clearScanResult())}>Clear</button>
        </Row>
    </>
}

export default ScanResult