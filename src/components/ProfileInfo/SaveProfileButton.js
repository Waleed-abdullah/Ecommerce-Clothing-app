import React from 'react'
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    button: {
      backgroundColor: '#804FC0',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#6c3da9',
        color: '#fff',
    },
}})

const SaveProfileButton = () => {
    const classes = useStyles()

    return (
        <Button className={classes.button}
        variant="text"
        size="large"
        sx={{bgcolor: "#804FC0", width:"100%", color:"#ffffff", mt:1, borderRadius: '15px', fontWeight: "bold", fontSize: "h6.fontSize", boxShadow: 10}}>
        Save Profile
        </Button>
    )
}

export default SaveProfileButton