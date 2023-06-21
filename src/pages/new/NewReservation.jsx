import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import { userInputs } from "../../formSource";
import { ReservationInputs } from "../../datatablesource";
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

const NewReservation = () => 
{
  const [inputs, setInputs] = useState(ReservationInputs);
  const [playgrounds, setPlaygrounds] = useState([]);
  const [usernames, setUsernames] = useState([]);

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(async() =>
    {
        let playgrounds = await axios.get(playgroundsURL);
        playgrounds = playgrounds.data.data.playgrounds;
        const playgroundsNames =  playgrounds.map((playground) =>{ return {label: playground.name}});
        setPlaygrounds(playgroundsNames);

        let customers = await axios.get(customersURL);
        customers = customers.data.data.customers;
        const userNames = customers.map((customer) => { return {label: customer.username } });
        setUsernames(userNames)
    }, []);

  const handleSubmit = async (event) => 
  {
    event.preventDefault();
    await axios.post(reservationsURL, data);
    navigate('/reservations');
  };



  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Reservations</h1>
        </div>
        <div className="bottom">

          <div className="right">
            <form onSubmit={handleSubmit}>
            <div>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={usernames}
                        sx={{ width: 300 }}
                        onChange={(event, value) => {setData({...data, username: value.label})}}
                        renderInput={(params) => <TextField {...params} label="Username" />}
                        />
                </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.label}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} required={input.required} onChange={(event)=> {setData({...data, [input.name]: event.target.value})}}/>
                </div>
              ))}

               <div>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={playgrounds}
                        sx={{ width: 300 }}
                        onChange={(event, value) => {setData({...data, playgroundName: value.label})}}
                        renderInput={(params) => <TextField {...params} label="Playground Name" />}
                        />
                </div>
              <button className="submitButton" type="submit">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewReservation;
