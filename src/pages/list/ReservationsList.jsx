import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ReservationsDatatable from "../../components/datatable/RervationsDatatable"
import { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';


const List = (props) => 
{

   return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <ReservationsDatatable />
      </div>
    </div>
  )
}

export default List