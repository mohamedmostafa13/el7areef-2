import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import OwnersDatatable from "../../components/datatable/OwnersDatatable"
import { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';


const List = (props) => 
{

   return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <OwnersDatatable />
      </div>
    </div>
  )
}

export default List