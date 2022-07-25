import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({model}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleSubmit(e){
      e.preventDefault()
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit {model.name} 
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit {model.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To edit this model, make the necessary changes, then click "Update."
          </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={model.name}
          />
          <TextField
            margin="dense"
            id="number_in_collection"
            label="Number in Collection"
            type="number"
            fullWidth
            variant="standard"
            defaultValue={model.number_in_collection}
          />
          <TextField
            margin="dense"
            id="cost_per_box"
            label="Cost Per Box"
            type="number"
            fullWidth
            variant="standard"
            defaultValue={model.cost_per_box}
          />
          <TextField
            margin="dense"
            id="unit_points_cost"
            label="Unit Points Cost"
            type="number"
            fullWidth
            variant="standard"
            defaultValue={model.unit_points_cost}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
