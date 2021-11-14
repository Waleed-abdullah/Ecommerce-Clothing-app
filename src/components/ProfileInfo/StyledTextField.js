import React from 'react'
import { TextField } from '@mui/material'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: '80px',
        backgroundColor: "#FFFFFF",
        height: '40px',
    }
}))

const StyledTextField = (props) => {
    const classes = useStyles();
    return (
      <TextField InputProps={{ classes, disableUnderline: true }} {...props} />
    );
}

export default StyledTextField