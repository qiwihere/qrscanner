import React from "react";
import {setConfiguration, Container} from 'react-grid-system'
import {BrowserRouter as Router} from 'react-router-dom'
import {Routes} from "./routes";
export const App = () => {
  setConfiguration({
    maxScreenClass: "lg"
  })

  return <Container>
    <Router>
      <Routes />
    </Router>
  </Container>
}
