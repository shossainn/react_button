import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import { Button } from "./components/Button";

function App () {
  return (
    <div className="App">
      <Button onClick ={() => {console.log("I was triggered!!!!")}}
      
      type="button"
      buttonStyle="btn--primary--outline"
      buttonSize="btn--large"
      > CLICK ME</Button>
      </div>

  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
