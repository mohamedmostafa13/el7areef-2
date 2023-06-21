import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { OwnerColumns, OwnerRows, PlaygroundColumns, PlaygroundRows, ReservationColumns, ReservationRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const version = "v1";

const baseURL = `http://localhost:3000/api/${version}/admin`;

const totalprofitURL = `${baseURL}/stats/totalProfit`;

const ownersURL = `${baseURL}/playgroundOwners`;

const playgroundsURL = `${baseURL}/playgrounds`;

const reservationsURL = `${baseURL}/reservations`;

const Widget = ({ type }) => 
{

    const [totalProfit, setTotalProfit] = useState(0);
    const [numberOfOwners, setNumberOfOwners] = useState(0);
    const [numberOfPlaygrounds, setNumberOfPlaygrounds] = useState(0);
    const [numberOfReservations, setNumberOfReservations] = useState(0);

  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  useEffect(async () =>
    {
        let resp = await axios.get(ownersURL);
        resp = resp.data.data.playgroundOwners;
        setNumberOfOwners(resp.length);

        resp = await axios.get(playgroundsURL);
        resp = resp.data.data.playgrounds;
        setNumberOfPlaygrounds(resp.length);

        resp = await axios.get(reservationsURL);
        resp = resp.data.data.reservations;
        setNumberOfReservations(resp.length);
    }, []);

  useEffect(async () =>
    {
        let resp = await axios.get(totalprofitURL);
        resp = resp.data.data.totalProfit;
        setTotalProfit(resp);
    }, []);


  switch (type) {
    case "user":
      data = {
        title: "OWNER",
        isMoney: false,
        link: "See all owners",
        path: "/owners",
        amount: numberOfOwners,
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "PLAYGROUNDS",
        isMoney: false,
        link: "View all playgrounds",
        path: "/playgrounds",
        amount: numberOfPlaygrounds,
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "PROFIT",
        isMoney: true,
        link: "See details",
        path: "/reservations",
        amount: totalProfit,
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "RESERVATIONS",
        isMoney: false,
        link: "View all reservations",
        path: "/reservations",
        amount: numberOfReservations,
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {data.amount}
        </span>
        <Link to={data.path} >
        <div className="link">
          {data.link}
        </div>
        </Link>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
