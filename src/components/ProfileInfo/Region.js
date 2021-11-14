import Box from '@mui/material/Box';
import { FormControl, MenuItem, Select, Typography } from '@mui/material'
import { makeStyles } from '@material-ui/styles';
import React from 'react'

const useStyles = makeStyles(theme => ({
    formControl: {
        borderRadius: "10px",
        width: '100%',
        backgroundColor: "#FFFFFF",
    }
}))

const Region = ({region, setRegion}) => {
    const classes = useStyles();

    const handleRegionChange = (event) => {
        console.log(event.target.value)
        setRegion(event.target.value)
    }

    return (
        <Box sx={{mt: 2}}>
        <Typography 
        variant="subtitle2" 
        ml={3} 
        bgcolor="#D9A9FF" 
        width='15%' 
        textAlign='center' 
        borderRadius="14px" 
        color='#804FC0' 
        fontWeight='bold'>
        Region
        </Typography>
        <FormControl className={classes.formControl}>
            <Select defaultValue={1} onChange={handleRegionChange}>
                <MenuItem value={1}>Pakistan</MenuItem>
                <MenuItem value={2}>USA</MenuItem>
                <MenuItem value={3}>India</MenuItem>
                <MenuItem value={4}>Iran</MenuItem>
            </Select>
        </FormControl>
        </Box>
    )
}

export default Region