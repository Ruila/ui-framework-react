import React, { useState } from 'react';
import { MoButton, MoQrScanner} from "../lib"

export default {
    title: 'Example/QrScanner',
    component: MoQrScanner,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};


const Template = (args) => {
    const [open, setOpen] = useState(false);
    const [result, setResult] = useState("");
    const handleOpen = () => {
        console.log("click open")
        setOpen(true)
    }
    const handleClose = () => {
        console.log("click close")
        setOpen(false)
    }
    const getResult = (data) => {
        setResult(data)
    }
    return (
        <div>
           <MoButton label="open" click={handleOpen}></MoButton>
           <MoQrScanner show={open} handleClose={handleClose} getResult={getResult}/>
           <div>result: {result}</div>
        </div>
    )
}

export const Overview = Template.bind({});
Overview.args = {
    primary: true,
    position: "right"
};
