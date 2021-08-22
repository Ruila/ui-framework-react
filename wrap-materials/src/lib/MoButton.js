import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        background: '#30b3ff',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 60,
        padding: '0 30px',
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