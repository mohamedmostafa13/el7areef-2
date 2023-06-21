import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { OwnerColumns, OwnerRows, PlaygroundColumns, PlaygroundRows } from "../../datatablesource";
import { userInputs, playgroundInputs } from "../../formSource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const version = "v1";

const baseURL = `http://localhost:3000/api/${version}/admin`;

const ownersURL = `${baseURL}/playgroundOwners`;

const OwnersDatatable = (props) => 
{
  const [data, setData] = useState([]);
  const [column, setColumn] = useState([]);
  // const [dataSource, setDataSource] = useState(props.dataSource);
  // const [inputSource, setInputSource] = useState(userInputs);

  const updateData = async() =>
  {
        const response = await axios.get(ownersURL);
        console.log(response)
        if(response.status == 200 && response.data.data.playgroundOwners.length > 0)
        {
        const owners = response.data.data.playgroundOwners;
        const ownersRefined = await owners.map((owner) =>
        {
            return {
                id: owner._id,
                name: owner.name,
                username: owner.username,
                email: owner.email,
                phone: owner.phone,
                profit: owner.profit ? owner.profit : 0,
            };
        });
        

            const columns = Object.keys(ownersRefined[0]).map((key) =>
            {
                return {
                    field: key,
                    headerName: key.charAt(0).toUpperCase() + key.slice(1),
                    width: 200,
                };
            });
            setColumn(columns);
            setData(ownersRefined);
            console.log(ownersRefined);
        }
        else
            setData([]);
  }
  useEffect(async () => 
  {
    await updateData();
  }, [])

  const handleDelete = async(id) => 
  {
    console.log(id);
    await axios.delete(`${ownersURL}/${id}`);

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
            {/* <Link to="/owners/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link> */}
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}>
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
        <Link to="/owners/new"  className="link">
          Add New Owner
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

export default OwnersDatatable;
