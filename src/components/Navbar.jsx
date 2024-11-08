import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          EmployeeApp
        </Typography>
        <Link to={'/dash'} style={{color:'white'}}><Button color="inherit">Home</Button></Link>
        <Link to={'/list'} style={{color:'white'}}><Button color="inherit">Employee List</Button></Link>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar