import React from 'react';
import './Form.css';
import { Paper, Grid } from '@mui/material';

const Form = () => {
  return (
    <>
      <Paper>
        <form action="">
          <h3>Personal Details</h3>
          <div className="form_group_parent">
            <div className="form_group">
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="form_group">
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="form_group">
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
          </div>
        </form>
      </Paper>
    </>
  );
};

export default Form;
