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
              <label htmlFor="name">
                Name
                <span className="star">*</span>
              </label>
              <input type="text" placeholder="Enter Name" />
            </div>
            <div className="form_group">
              <label htmlFor="name">
                Date of Birth or Age
                <span className="star">*</span>
              </label>
              <input type="text" placeholder="DD/MM/YYYY or Age in Years" />
            </div>
            <div className="form_group">
              <label htmlFor="sex">
                Sex
                <span className="star">*</span>
              </label>
              <select name="sex" id="" form="">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <br />
          <div className="form_group_parent">
            <div className="form_group">
              <label htmlFor="name">
                Mobile
                <span className="star">*</span>
              </label>
              <input type="text" placeholder="Enter Mobile" />
            </div>
            <div className="form_group">
              <label htmlFor="name">
                Govt Issue ID <span className="star">*</span>
              </label>
              <select name=" Govt Issue ID">
                <option value="" disabled selected hidden>
                  ID Type
                </option>

                <option value="Pen Card">Pen Card</option>
                <option value="Aadhaar Card">Aadhaar Card</option>
                <option value="Driving License">Driving License</option>
                <option value="Voter ID">Voter ID</option>
              </select>

              <input type="text" placeholder="Enter Govt ID" />
            </div>
          </div>
          <h3>Contact Details</h3>
          <div className="form_group_parent">
            <div className="form_group">
              <label htmlFor="">Guardient Details</label>
              <select name="" id="" form="">
                <option value="" disabled selected hidden>
                  Enter Label
                </option>

                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
              </select>
              <input type="text" placeholder="Enter Guardient Name" />
            </div>
            <div className="form_group">
              <label htmlFor="">Email</label>
              <input type="email" placeholder="Enter Email" />
            </div>
            <div className="form_group">
              <label htmlFor="">Emergency Conatct Number</label>
              <input type="Text" placeholder="Enter Emergency No" />
            </div>
          </div>
          <h3>Address Details</h3>
          <div className="form_group_parent">
            <div className="form_group">
              <label htmlFor="">Address</label>
              <input type="Text" placeholder="Enter Address" />
            </div>
            <div className="form_group">
              <label htmlFor="">State</label>
              <select name="" id="" form="">
                <option value="" disabled selected hidden>
                  Enter Label
                </option>

                <option value="Maharastra">Maharastra</option>
                <option value="MP">Maharastra</option>
              </select>
            </div>
            <div className="form_group">
              <label htmlFor="">City</label>
              <select name="" id="" form="">
                <option value="" disabled selected hidden>
                  Enter Label
                </option>

                <option value="Maharastra">Maharastra</option>
                <option value="MP">MP</option>
              </select>
            </div>
          </div>
          <br />
          <div className="form_group_parent">
            <div className="form_group">
              <label htmlFor="">Country</label>
              <select name="" id="" form="">
                <option value="" disabled selected hidden>
                  Country{' '}
                </option>

                <option value="Maharastra">India</option>
                <option value="US">US</option>
              </select>
            </div>
            <div className="form_group">
              <label htmlFor="">Pincode</label>
              <input type="text" placeholder="Enter Pincode" />
            </div>
          </div>
        </form>
      </Paper>
    </>
  );
};

export default Form;
