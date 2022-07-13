import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {Button, Grid} from '@mui/material';
// import Grid from "@material-ui/core/Grid";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Home() {
    const [armies, setArmies] =  useState([])
    const [chosenArmy, setChosenArmy] = useState("");
    let navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:9292')
        .then((response) => response.json()
        .then(fullArmyData => setArmies(fullArmyData)))
    },[])
  


  function handleChange(e){
    console.log(e.target.value)
    setChosenArmy(e.target.value);
   
  }
  function navigateToChosenArmy(){
    navigate(`/${chosenArmy}`)
  }


  return (
    <div>
    <Box
      sx={{
        minWidth: 120,
        width: "30%",
        backgroundColor: "white",
        color: "red",
        margin: "0 auto",
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Choose Army</InputLabel>
        <Select
          autoWidth
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={chosenArmy}
          label="Choose Army"
          onChange={handleChange}
        >
          <MenuItem value={"death_guard"}>Death Guard</MenuItem>
          <MenuItem value={"drukhari"}>Drukhari</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Grid container justify="center">
    <Button variant="contained" onClick={navigateToChosenArmy} sx={{margin: '20px auto'}}>Go To Army Page</Button>
    </Grid>
    </div>
  );
}

export default Home;
