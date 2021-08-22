import React from 'react';
import { MoSnackBar, MoButton} from "../lib"

export default {
    title: 'Example/MoSnackBar',
    component: MoSnackBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};


const Template = (args) => {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div>
            <MoButton label="open" click={handleClick}></MoButton>
            <MoButton label="close" click={handleClose}></MoButton>
            <MoSnackBar {...args} show={open} close={handleClose}></MoSnackBar>
        </div>
    )
}

export const Overview = Template.bind({});
Overview.args = {
    primary: true,
    position: "right"
};
