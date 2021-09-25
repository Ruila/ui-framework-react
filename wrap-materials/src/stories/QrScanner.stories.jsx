import React from 'react';
import { MoButton, MoQrScanner} from "../lib"

export default {
    title: 'Example/QrScanner',
    component: MoQrScanner,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};


const Template = (args) => {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        console.log("click open")
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div>
           <MoButton label="open" click={handleClick}></MoButton>
           <MoQrScanner show={open} handleClick={handleClick} handleClose={handleClose} />
        </div>
    )
}

export const Overview = Template.bind({});
Overview.args = {
    primary: true,
    position: "right"
};
