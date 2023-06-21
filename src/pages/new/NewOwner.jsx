import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import { OwnerInputs, OwnerRows } from "../../datatablesource";
import { useLocation } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import axios from "axios";


const version = "v1";

const baseURL = `http://localhost:3000/api/${version}/admin`;

const ownersURL = `${baseURL}/playgroundOwners`;

const NewOwner = () => 
{
  const [inputs, setInputs] = useState(OwnerInputs);
  
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async(event) => 
  {
    event.preventDefault();
    console.log(data);
    
    await axios.post(ownersURL, data);

    navigate('/owners');

  }
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Owner</h1>
        </div>
        <div className="bottom">

          <div className="right">
            <form onSubmit={handleSubmit}>

              {inputs.map((input) => (
                <div className="formInput" key={input.label}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} onChange={(event)=> {setData({...data, [input.name]: event.target.value})}} />
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

export default NewOwner;
