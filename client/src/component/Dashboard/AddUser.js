import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function AddUser({button}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (data) => {
    const newErrors = {};

    if (!/^[A-Za-z\s]+$/.test(data.name)) {
      newErrors.name = 'Name can only contain alphabets and spaces.';
    }

    if (!/^\w+@\w+\.\w+$/.test(data.email)) {
      newErrors.email = 'Invalid email address.';
    }

    if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&]).{8,}$/.test(data.password)
    ) {
      newErrors.password =
        'Password must contain at least 1 letter, 1 number, and 1 special character, and be at least 8 characters long.';
    }

    if (!/^\d+$/.test(data.phone)) {
      newErrors.phone = 'Phone can contain only numbers.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleFormSubmit = (e, form) => {
    e.preventDefault();

    if (validateForm(form)) {
            handleCloseDialog();
            alert('User added')
    }
  };

  return (
    <div>
      <Button onClick={handleOpenDialog} variant='contained'> Add user{button}</Button>

      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <form onSubmit={(e) => handleFormSubmit(e, formData)}>
          <DialogContent>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              fullWidth
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
            />
            <TextField
              type="password"
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              fullWidth
            />
            <TextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button type="submit" variant='contained'>
              Add User
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default AddUser;

