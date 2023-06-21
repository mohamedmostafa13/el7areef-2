import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import { CustomerInputs } from "../../datatablesource";
import { useLocation } from "react-router-dom";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const version = "v1";

const baseURL = `http://localhost:3000/api/${version}/admin`;

const reservationsURL = `${baseURL}/reservations`;

const playgroundsURL = `${baseURL}/playgrounds`;

const customersURL = `${baseURL}/customers`;

const NewCustomer = () => 
{
  const [inputs, setInputs] = useState(CustomerInputs);
  const [playgrounds, setPlaygrounds] = useState([]);
  const [usernames, setUsernames] = useState([]);

  const [data, setData] = useState([]);
  const navigate = useNavigate();


  const handleSubmit = async (event) => 
  {
    event.preventDefault();
    await axios.post(customersURL, data);
    navigate('/customers');
  };



  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Customer</h1>
        </div>
        <div className="bottom">

          <div className="right">
            <form onSubmit={handleSubmit}>

              {inputs.map((input) => (
                <div className="formInput" key={input.label}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} required={input.required} onChange={(event)=> {setData({...data, [input.name]: event.target.value})}}/>
                </div>
              ))}

              <button className="submitButton" type="submit">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCustomer;
