import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Scanner from "./containers/Scanner";
import {useSelector} from "react-redux";
import ScanResult from "./containers/ScanResult";

export const Routes = () => {
    const scanResult = useSelector(state=>state.qr.result)
    return <Switch>
        <Route path={'/scan'} exact>
            {scanResult?<Redirect to={'/result'} />:<Scanner />}
        </Route>
        <Route path={'/result'} exact>
            {!scanResult?<Redirect to={'/scan'} />:<ScanResult />}
        </Route>
        <Redirect to={'/scan'} />
    </Switch>
}