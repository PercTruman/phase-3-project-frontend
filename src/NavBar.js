import React from 'react'
import {NavLink} from 'react-router-dom';
import { AppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function NavBar() {
    return (
        <Box sx={{  flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Warhammer Army Inventory
              </Typography>
              <NavLink to="/" color="inherit" >Home</NavLink>
              <NavLink to="/armies" color="inherit" >Armies</NavLink>
              <NavLink to="/add_model_form" color="inherit" >Add Models</NavLink>
            </Toolbar>
          </AppBar>
        </Box>
      );
    }

export default NavBar