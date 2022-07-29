import React from 'react'
import {NavLink} from 'react-router-dom';
import { AppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function NavBar({armies, handleChange}) {
  const dropDownOptions = armies.map((army) => (
    <MenuItem key={army.name} value={army.name} id={army.id}>
      {army.name}
    </MenuItem>
  ))
    return (
        <Box sx={{  flexGrow: 1, marginBottom: '3rem'}}>
          <AppBar position="static" sx={{height: '130px'}}>
            <Toolbar sx={{height: '6 rem'}}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center', margin: '0 auto' , padding: '2.5rem'}}>
                Warhammer Army Inventory
              </Typography>
              <Box
        sx={{
          minWidth: 120,
          width: "30%",
          backgroundColor: "white",
          margin: "0 auto",
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Choose Army</InputLabel>
          <Select
            type="text"
            autoWidth
            labelId="demo-simple-select-label"
            value=""
            id="demo-simple-select"
            label="Choose Army"
            onChange={handleChange}
          >
            {dropDownOptions}
          </Select>
        </FormControl>
      </Box>
              <NavLink  style={{ padding: '15px', color: 'yellow'}}to="/" color="red" >Home</NavLink>
              <NavLink  style={{ padding: '15px', color: 'yellow'}}to="/add_new_army" color="red" >Add New Army</NavLink>
              <NavLink  style={{ padding: '15px', color: 'yellow'}}to="/add_new_models" color="red" >Add Models</NavLink>
            </Toolbar>
          </AppBar>
        </Box>
      );
    }

export default NavBar