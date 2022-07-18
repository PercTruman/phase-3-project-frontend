import React from 'react'

function AddArmyForm({handleArmyFormSubmit, armyFormData, handleArmyFormChange}) {
  return (
    <form  onSubmit={handleArmyFormSubmit}
    style={{
      display: "flex",
      flexDirection: "column",
      width: "400px",
      margin: "auto",
      paddingTop: "2rem",
      color:'red'
    }}>
    <label style={{fontSize:"20px", textAlign: "center", padding:'15px'}}>Army Name</label>
      <input
        value={armyFormData.name}
        type="text"
        name="name"
        aria-label="army name"
        onChange={handleArmyFormChange}
      ></input>
      <label style={{fontSize:"20px", textAlign: "center", padding:'15px'}}>Alignment</label>
      <input
        value={armyFormData.alignment}
        type="text"
        name="alignment"
        aria-label="alignment"
        onChange={handleArmyFormChange}
      ></input>
       <label style={{fontSize:"20px", textAlign: "center", padding:'15px'}}>Description</label>
      <input
        value={armyFormData.description}
        type="text"
        name="description"
        aria-label="description"
        onChange={handleArmyFormChange}
      ></input>
       <input style={{marginTop:"2rem"}}type="submit" value="Add New Army"/>
      </form>
  )
}

export default AddArmyForm