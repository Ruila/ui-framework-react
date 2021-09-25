import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { bool, string } from 'prop-types';
import QrReader from 'react-qr-scanner';
import { withStyles } from '@material-ui/styles';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

MoQrScanner.propTypes = {
  show: bool,
  handleClose: ()=>{},
  getResult: ()=>{}
}

const previewStyle = {
  width: "100%",
}

const dialogStyle = {
  root: {
     "backgroundColor": "#000"
  },
};

function MoQrScanner (props) {
  const { show, handleClose, getResult } = props
  const handleScan = (data) => {
    if(data) {
      getResult(data.text)
      handleClose()
    }
  }
  const handleError = (err) => {
    console.error(err)
  }
  return (
    <div>
      <Dialog
        fullScreen
        classes={{
          root: dialogStyle.root
        }}
        open={show}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <QrReader
          delay={100}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
          />
      </Dialog>
    </div>
  );
}

export default withStyles(dialogStyle)(MoQrScanner);