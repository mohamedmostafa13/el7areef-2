import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { OwnerColumns, OwnerRows, PlaygroundColumns, PlaygroundRows, ReservationColumns, ReservationRows } from "../../datatablesource";
import { userInputs, playgroundInputs } from "../../formSource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


const version = "v1";

const baseURL = `http://localhost:3000/api/${version}/admin`;

const ReservationsURL = `${baseURL}/reservations`;

const RervationsDatatable = (props) => 
{
  const [data, setData] = useState([]);
  const [column, setColumn] = useState([]);
    
  const updateData = async() =>
  {
    const response = await axios.get(ReservationsURL);
    if(response.status == 200 && response.data.data.reservations.length > 0)
    {

        const reservations = response.data.data.reservations;
        const reservationsRefined = reservations.map((reservation) => {
        return {
            id: reservation._id,
            playground: reservation.playgroundName,
            customer: reservation.username,
            date: reservation.date,
            price: reservation.price,
            paid: reservation.isPaid,
            //reviewed: reservation.isReviewed,
            profit: reservation.profit,
            hours: reservation.hours,
        };
    });
    const reservationsColumns = Object.keys(reservationsRefined[0]).map((key) => {
        return {
            field: key,
            headerName: key,
            width: 200,
        };
    });
    setColumn(reservationsColumns);
    setData(reservationsRefined);
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
    await axios.delete(ReservationsURL, id);
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
            {/* <Link to="/reservations/test" style={{ textDecoration: "none" }}>
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
        <Link to="/reservations/new"  className="link">
          Add New Reservations
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

export default RervationsDatatable;
