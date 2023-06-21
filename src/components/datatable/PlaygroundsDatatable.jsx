import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { OwnerColumns, OwnerRows, PlaygroundColumns, PlaygroundRows } from "../../datatablesource";
import { userInputs, playgroundInputs } from "../../formSource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


const version = "v1";

const baseURL = `http://localhost:3000/api/${version}/admin`;

const playgroundsURL = `${baseURL}/playgrounds`;

const PlaygroundsDatatable = (props) => {
  const [data, setData] = useState([]);
  const [column, setColumn] = useState([]);
  // const [dataSource, setDataSource] = useState(props.dataSource);
  // const [inputSource, setInputSource] = useState(userInputs);

  const updateData = async() => 
  {
    const response = await axios.get(playgroundsURL);
    console.log(response)
    if(response.status == 200 && response.data.data.playgrounds.length > 0)
    {

        const playgrounds = response.data.data.playgrounds;
        
        const playgroundsRefined = playgrounds.map((playground) => {
            return {
            id: playground._id,
            name: playground.name,
            address: playground.address,
            city: playground.city,
            state: playground.isAvailable,
            owner: playground.ownerUsername,
            pricePerHour: playground.pricePerHour,
            //utilities: playground.utilities,
        };
    });
    const playgroundsColumns = Object.keys(playgroundsRefined[0]).map((key) => {
        return {
            field: key,
            headerName: key,
            width: 200,
        };
    });
    setColumn(playgroundsColumns);
    setData(playgroundsRefined);
    }
    else
        setData([]);
  };


  useEffect(async() => 
  {
        await updateData();
  }, []);

  const handleDelete = async(id) => 
  {
        await axios.delete(`${playgroundsURL}/${id}`);
        await updateData();
  };

  
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* <Link to="/playgrounds/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link> */}
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle"> 
        <Link to="/playgrounds/new"  className="link">
          Add New Playground
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={column.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default PlaygroundsDatatable;
