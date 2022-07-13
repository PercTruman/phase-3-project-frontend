import React, {useState} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Home() {

    const [chosenArmy, setChosenArmy] = useState("")
  return (
    <Box sx={{ minWidth: 120, width: '30%', backgroundColor: 'white', color: 'red', margin: '0 auto'}}>
    <FormControl fullWidth >
      <InputLabel  id="demo-simple-select-label">Choose Army</InputLabel>
      <Select
        
        autoWidth
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={chosenArmy}
        label="Choose Army"
        onChange={ e => setChosenArmy(e.target.value)}
      >
        <MenuItem value={"DeathGuard"}>Death Guard</MenuItem>
        <MenuItem value={"Drukhari"}>Drukhari</MenuItem>
      </Select>
    </FormControl>
  </Box>
  )
}

export default Home