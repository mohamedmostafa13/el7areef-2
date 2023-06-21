import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { OwnerColumns, OwnerRows, PlaygroundColumns, PlaygroundRows, UtilitiesColumns, UtilitiesRows } from "../../datatablesource";
import { userInputs, playgroundInputs } from "../../formSource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const UtilitiesDatatable = (props) => {
  const [data, setData] = useState(PlaygroundRows);
  const [column, setColumn] = useState(PlaygroundColumns);
  // const [dataSource, setDataSource] = useState(props.dataSource);
  // const [inputSource, setInputSource] = useState(userInputs);

  

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
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

export default UtilitiesDatatable;
