import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { bool, string } from 'prop-types';

MoSnackBar.propTypes = {
    position: string,
    show: bool
};

export default function MoSnackBar(props) {
    const {position, show, close } = props
    return (
        <div>
            <div>status:{ show ? "true" : "false" }</div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: position,
                }}
                open={show}
                autoHideDuration={6000}
                onClose={close}
                message="Note archived"
                action={
                    <React.Fragment>
                        <Button color="secondary" size="small" onClick={close}>
                            UNDO
                        </Button>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={close}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
        </div>
    );
}