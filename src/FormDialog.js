import * as React from 'react';
import {NavLink} from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



 function FormDialog({model}) {
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
    // handleEditModel(modelEditFormData)
  }
   
    function handleEditModel(formData){
      fetch(`http://localhost:9292/:armyId/:modelId`,{
          method: 'PATCH',
          headers:{"Content-Type": "application/json"},
          body: JSON.stringify({
              // name: {formData.name},
              number_in_collection: 0,
              cost_per_box: 0,
              unit_points_cost: 0
          }),
    })}
    // .then(res => res.json())
    // .then(updatedModel=>alert(`${updatedModel} updated.`))
    // // setOpen(false);
  // };

  return (
    <div>
      <Button variant="contained" component={NavLink} to="/edit_models/:modelId"onClick={handleClickOpen}>
       Edit {model.name}
      </Button>
     
        <Dialog open={open} onClose={handleClose}>
        <form onSubmit={e=>handleSubmit(e)}id={model.id}>
            <DialogTitle>Edit {model.name}</DialogTitle>
            <DialogContent>
            <DialogContentText>
                To update this model's stats, please fill the new statistics here.Then click "Update."
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label= "Name: " 
                type="text"
                fullWidth
                variant="standard"
            />
                <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Number in Collection:"
                type="number"
                fullWidth
                variant="standard"
            />
                <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Cost Per Box"
                type="number"
                fullWidth
                variant="standard"
            />
                <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Unit Points Cost"
                type="number"
                fullWidth
                variant="standard"
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type ="submit" >Update</Button>
            </DialogActions>
         </form>
        </Dialog>
      
    </div>
  );
}

export default FormDialog;
