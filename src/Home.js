import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Home({ armies, handleChange, chosenArmy }) {
  const armyNames = armies.map((army) => (
    <MenuItem key={army.name} value={army.name} id={army.id}>
      {army.name}
    </MenuItem>
  ));


  return (
    <div>
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
            value=''
            id="demo-simple-select"
            label="Choose Army"
            onChange={handleChange}
          >
            {armyNames}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default Home;
