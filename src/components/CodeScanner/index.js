import React, {useEffect} from "react";
import PropTypes from 'prop-types';

const CodeScanner = ({uniqueId, onSuccess, onError, qrbox, width}) => {
    useEffect(()=>{
        const scanner = new window.Html5Qrcode(uniqueId, false)
        scanner.start({facingMode: "environment"}, {
            fps: 3,
            qrbox
        }, onSuccess, onError)

        return () => scanner
            .stop()
            .catch(err=>console.log('Error during CodeScanner unmount. ', err))
    },[uniqueId, onError, onSuccess, qrbox])

    return <div id={uniqueId} style={{width: `${width?width:500}px`, margin: "auto"}}/>
}

CodeScanner.propTypes = {
    uniqueId: PropTypes.string,
    onSuccess: PropTypes.func,
    onError: PropTypes.func,
    qrbox: PropTypes.number,
    width: PropTypes.number
}

export default CodeScanner