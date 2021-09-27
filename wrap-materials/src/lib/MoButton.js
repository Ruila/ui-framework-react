import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        background: '#fff',
        border: "2px solid #060606!important",
        borderRadius: 3,
        width: "120px",
        color: '#060606',
        padding: '10px 20px',
        '&:hover': {
            background: "#060606",
            color: "#fff"
        }
    },
};

function MoButton(props) {
    const { classes, label, click } = props;
    return <Button className={classes.root} onClick={click}>{label}</Button>;
}

MoButton.propTypes = {
    classes: PropTypes.object.isRequired,
    label: PropTypes.string,
    click: PropTypes.func
};

export default withStyles(styles)(MoButton);