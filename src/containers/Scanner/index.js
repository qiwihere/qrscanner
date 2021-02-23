import CodeScanner from "../../components/CodeScanner";
import {Row, Col} from "react-grid-system";
import React from "react";
import {setQrScanResult} from "../../store/actions";
import {useDispatch} from "react-redux";

const Scanner = () => {
    const dispatch = useDispatch()
    return  <>
        <Row>
            <Col lg={12}>
                <h1>COCKTAMP QR SCANNER</h1>
            </Col>
        </Row>
        <Row>
            <Col lg={12}>
                <CodeScanner uniqueId={"camera1"} onSuccess={r=>dispatch(setQrScanResult(r))} qrbox={190} width={300} onError={()=>{}} />
            </Col>
        </Row>
    </>
}

export default Scanner