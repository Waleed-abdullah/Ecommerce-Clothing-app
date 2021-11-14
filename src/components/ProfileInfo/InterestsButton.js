import React from 'react'
import Button from '@mui/material/Button'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    button: {
      '&:hover': {
        backgroundColor: '#6c3da9 !important',
        color: '#fff !important',
    },
}})

const InterestsButton = ({name, displayName, handleClick, interest}) => {
    const classes = useStyles()

    return (
        <Button className={classes.button}
        name={name}
        onClick={handleClick}
        variant="text"
        sx={{p: 1, m:2, bgcolor: `${interest ? "#804FC0" : "#FAF4FF"}`, borderRadius: "10px", color: `${interest ? "#FFFFFF": '#804FC0'}`}}>
            {displayName}
        </Button>
    )
}

export default InterestsButton