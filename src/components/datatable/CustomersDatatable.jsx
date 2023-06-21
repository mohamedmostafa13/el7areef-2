import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { OwnerColumns, OwnerRows, PlaygroundColumns, PlaygroundRows, ReservationColumns, ReservationRows } from "../../datatablesource";
import { userInputs, playgroundInputs } from "../../formSource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


const version = "v1";

const baseURL = `http://localhost:3000/api/${version}/admin`;

const CustomersURL = `${baseURL}/customers`;

const CustomersDatatable = (props) => 
{
  const [data, setData] = useState([]);
  const [column, setColumn] = useState([]);
    
  const updateData = async() =>
  {
    const response = await axios.get(CustomersURL);
    if(response.status == 200 && response.data.data.customers.length > 0)
    {

        const customers = response.data.data.customers;
        const customersRefined = customers.map((customer) => {
        return {
            id: customer._id,
            name: customer.name,
            username: customer.username,
            email: customer.email,
            phone: customer.phone
        };
    });
    const customersColumns = Object.keys(customersRefined[0]).map((key) => {
        return {
            field: key,
            headerName: key,
            width: 200,
        };
    });
    setColumn(customersColumns);
    setData(customersRefined);
    }
    else
        setData([]);
  }

  useEffect(async() =>
    {
        updateData();
    }, []);

    const handleDelete = async(id) => 
    {
      await axios.delete(CustomersURL, id);
      updateData();
    };
  
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* <Link to="/customers/test" style={{ textDecoration: "none" }}>
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
        <Link to="/customers/new"  className="link">
          Add New Customers
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

export default CustomersDatatable;
