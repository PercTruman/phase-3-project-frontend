import React from 'react'
import {NavLink} from 'react-router-dom';
import { AppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function NavBar() {
    return (
        <Box sx={{  flexGrow: 1, marginBottom: '3rem'}}>
          <AppBar position="static" sx={{height: '130px'}}>
            <Toolbar sx={{height: '6 rem'}}>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: 'center', margin: '0 auto' , padding: '2.5rem'}}>
                Warhammer Army Inventory
              </Typography>
              <NavLink  style={{ padding: '15px', color: 'yellow'}}to="/" color="inherit" >Home</NavLink>
              <NavLink  style={{ padding: '15px', color: 'yellow'}}to="/add_army_form" color="inherit" >Add New Army</NavLink>
              <NavLink  style={{ padding: '15px', color: 'yellow'}}to="/add_model_form" color="inherit" >Add Models</NavLink>
            </Toolbar>
          </AppBar>
        </Box>
      );
    }

export default NavBar