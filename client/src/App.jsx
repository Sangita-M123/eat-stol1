import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Navbar from "./Components/Navbar";
import Homescreen from "./Screens/Homescreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cartscreen from "./Screens/Cartscreen";
import Registerscreen from "./Screens/Registerscreen";
import Loginscreen from "./Screens/Loginscreen";
import Ordersscreen from "./Screens/Ordersscreen";
import Adminscreen from "./Screens/Adminscreen";
import Userslist from "./Screens/Userslist";
import Editpizza from "./Screens/Editpizza";

function App() {
  return (
    <div className="APP">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/cart" element={<Cartscreen />} />
          <Route path="/register" element={<Registerscreen />} />
          <Route path="/login" element={<Loginscreen />} />
          <Route path="/orders" element={<Ordersscreen />} />
          <Route path="/admin" element={<Adminscreen />} />
          <Route path="/admin/editpizza/:pizzaid" element={<Editpizza />} />

          {/* <Route path="/admin/userslist" element={<Userslist />} /> */}
          {/* <Route path="/admin/pizzaslist" element={<Pizzaslist />} />
          <Route path="/admin/addpizza" element={<Addpizzas />} />
          <Route path="/admin/orderslist" element={<Orderslist />} /> */}
        </Routes>
      </BrowserRouter>

      {/* <Homescreen /> */}
    </div>
  );
}

export default App;
