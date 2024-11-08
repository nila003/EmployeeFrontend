import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    location: '',
    salary: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.designation) newErrors.designation = 'Designation is required';
    if (!formData.location) newErrors.location = 'Location is required';
    if (!formData.salary) {
      newErrors.salary = 'Salary is required';
    } else if (isNaN(formData.salary) || formData.salary <= 0) {
      newErrors.salary = 'Salary must be a positive number';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log('Form Submitted:', formData);
      // Add API POST call here if needed.
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Employee Form
        </Typography>
        <form onSubmit={handleSubmit}>

          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            margin="normal"
            variant="outlined"
          />

          <TextField
            fullWidth
            label="Designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            error={!!errors.designation}
            helperText={errors.designation}
            margin="normal"
            variant="outlined"
          />

          <TextField
            fullWidth
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            error={!!errors.location}
            helperText={errors.location}
            margin="normal"
            variant="outlined"
          />

          <TextField
            fullWidth
            label="Salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            error={!!errors.salary}
            helperText={errors.salary}
            margin="normal"
            variant="outlined"
            type="number"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default EmployeeForm;
