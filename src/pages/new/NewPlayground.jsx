import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import { userInputs } from "../../formSource";
import { PlaygroundInputs, PlaygroundRows } from "../../datatablesource";
import { useLocation } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const version = "v1";

const baseURL = `http://localhost:3000/api/${version}/admin`;

const ownersURL = `${baseURL}/playgroundOwners`;

const playgroundsURL = `${baseURL}/playgrounds`;

const NewPlayground = () => 
{
  const [inputs, setInputs] = useState(PlaygroundInputs);
  const [ownersUsernames, setOwnersUsernames] = useState([]);
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(async() =>
  {
        let owners = await axios.get(ownersURL);
        owners = owners.data.data.playgroundOwners;
        const ownersUsernames =  owners.map((owner) =>{ return {label: owner.username}});
        setOwnersUsernames(ownersUsernames);
        console.log(ownersUsernames)

  }, []);

  const handleSubmit = async(event) => 
  {
    event.preventDefault();
    let resp = await axios.post(playgroundsURL, data);
    console.log(resp);
    navigate('/playgrounds');

  }
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Playground</h1>
        </div>
        <div className="bottom">

          <div className="right">
            <form onSubmit={handleSubmit}>

              {inputs.map((input) => (
                  <div className="formInput" key={input.label}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} required onChange={(event)=> {setData({...data, [input.name]: event.target.value})}} />
                </div>
              ))}
              <div>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={ownersUsernames}
                    sx={{ width: 300 }}
                    onChange={(event, value) => {setData({...data, ownerUsername: value.label})}}
                    renderInput={(params) => <TextField {...params} label="Owner Username" />}
                    />
                </div>
              <button className="submitButton" onClick={handleSubmit}>Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPlayground;
