import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        background: '#96e3ff',
        border: "2px solid #4094ee!important",
        borderRadius: 3,
        width: "120px",
        color: '#4094ee',
        padding: '10px 20px',
        '&:hover': {
            background: "#4094ee",
            color: "#fff"
        }
    },
};

function MoButton({ classes, label, click }) {
    return <Button className={classes.root} onClick={click}>{label}</Button>;
}

MoButton.propTypes = {
    classes: PropTypes.object.isRequired,
    label: PropTypes.string,
    click: PropTypes.func,
    backgroundColor: PropTypes.string,
    hoverBackgroundColor: PropTypes.string,
};

export default withStyles(styles)(MoButton);