import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import UtilitiesDatatable from "../../components/datatable/UtilitiesDatatable"
import { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';


const List = (props) => 
{

   return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <UtilitiesDatatable />
      </div>
    </div>
  )
}

export default List