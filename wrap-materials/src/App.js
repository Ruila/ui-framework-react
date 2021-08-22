import React, {useState} from "react";
import MoButton from "./lib/MoButton";
import MoSnackBar from "./lib/MoSnackBar";

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
          <MoSnackBar position="right" show={show}></MoSnackBar>
      </div>
  )
}

export default App;