import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import PlaygroundsDatatable from "../../components/datatable/PlaygroundsDatatable"
import { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';


const PlaygroundsList = (props) => 
{

   return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <PlaygroundsDatatable />
      </div>
    </div>
  )
}

export default PlaygroundsList