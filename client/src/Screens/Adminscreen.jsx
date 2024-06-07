import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Userslist from "./Userslist";
import Orderslist from "./Orderslist";
import Addpizzas from "./Addpizzas";
import Pizzaslist from "./Pizzaslist";
import Editpizza from "./Editpizza";
// import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";

export default function Adminscreen() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);
  const [userlistd, setuserlist] = useState(true);
  const userlistdisplay = () => {
    setpizzaslist(false);
    setaddnewpizza(false);
    setorderslist(false);
    setuserlist(true);
  };
  const [pizzaslistd, setpizzaslist] = useState(false);
  const pizzaslistdisplay = () => {
    setpizzaslist(true);
    setaddnewpizza(false);
    setorderslist(false);
    setuserlist(false);
  };
  const [addnewpizzad, setaddnewpizza] = useState(false);
  const addnewpizzadisplay = () => {
    setaddnewpizza(true);
    setpizzaslist(false);
    setorderslist(false);
    setuserlist(false);
  };
  const [orderslistd, setorderslist] = useState(false);
  const orderslistdisplay = () => {
    setorderslist(true);
    setpizzaslist(false);
    setaddnewpizza(false);
    setuserlist(false);
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>
          <ul className="adminfunction">
            <li onClick={userlistdisplay}>
              {/* <Link to="/admin/userslist">Users List</Link> */}
              Users List
            </li>
            <li onClick={pizzaslistdisplay}>
              {/* <a href="/admin/pizzaslist">Pizzas List</a> */}
              Pizzas List
            </li>
            <li onClick={addnewpizzadisplay}>
              {/* <a href="/admin/addpizza">Add New Pizza</a> */}
              Add New Pizza
            </li>
            <li onClick={orderslistdisplay}>
              {/* <a href="/admin/orderslist">Orders List</a> */}
              Orders List
            </li>
          </ul>
          {userlistd && <Userslist />}
          {pizzaslistd && <Pizzaslist />}
          {addnewpizzad && <Addpizzas />}
          {orderslistd && <Orderslist />}
          {/* <Editpizza /> */}
        </div>
      </div>
    </div>
  );
}
