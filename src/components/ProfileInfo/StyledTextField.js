import React from 'react'
import { TextField } from '@mui/material'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: '10px',
        backgroundColor: "#FFFFFF",
        height: '100%',
    }
}))

const StyledTextField = (props) => {
    const classes = useStyles();
    return (
      <TextField className={classes.root} {...props} />
    );
}

export default StyledTextField