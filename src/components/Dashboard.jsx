import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, Grid, Card, CardContent } from '@mui/material';

function Dashboard() {
  const [data, setData] = useState([]);
  const [view, setView] = useState('table'); 

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Employee Dashboard
      </Typography>

      {view === 'table' && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}      
    </Container>
  );
}

export default Dashboard;
