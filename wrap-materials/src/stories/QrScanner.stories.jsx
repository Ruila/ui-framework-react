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
    const handleOpen = () => {
        console.log("click open")
        setOpen(true)
    }
    const handleClose = () => {
        console.log("click close")
        setOpen(false)
    }
    return (
        <div>
           <MoButton label="open" click={handleOpen}></MoButton>
           <MoQrScanner show={open} handleOpen={handleOpen} handleClose={handleClose} />
        </div>
    )
}

export const Overview = Template.bind({});
Overview.args = {
    primary: true,
    position: "right"
};
