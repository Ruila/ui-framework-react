import React, {useState} from "react";
import {MoButton, MoSnackBar, MoQrScanner} from "./lib"

function App () {
    const [state, setState] = useState(1);
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setState(state => state + 1)
        setShow(true)
    }
    const handleClose = () => {
        setState(state => state + 1)
        setShow(false)
    }
  return  (
      <div>
          <span>Counter: {state}</span>
          <MoButton click={handleClick} label="open"></MoButton>
          <MoButton click={handleClose} label="close"></MoButton>
          <MoSnackBar position="right" show={show} close={handleClose}></MoSnackBar>
          <MoQrScanner />
      </div>
  )
}

export default App;