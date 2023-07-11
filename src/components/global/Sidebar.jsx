import React, { useEffect } from "react";
import logo from "../assets/sidebar/logo.png";
import { Link } from "react-router-dom";
const Sidebar = () => {
  
  return (

    <aside>
      <div className="toggle">
        <div className="logo">
          <img src={logo} alt="#" />
          <div className="close" id="close-btn">
            <span className="material-icons-sharp" 
            onClick={() => {
              const asideElement = document.querySelector('aside');
              asideElement.style.display = 'none';
            }}
            >close</span>
          </div>
        </div>
      </div>

      <div className="sidebar">
        <Link to="#" className="active">
          <span className="material-icons-sharp ">dashboard</span>
          <h3>Dashboard</h3>
        </Link>
        <Link to="#">
          <span className="material-icons-sharp">person_outline</span>
          <h3>Users</h3>
        </Link>
        <Link to="#" >
          <span className="material-icons-sharp">receipt_long</span>
          <h3>History</h3>
        </Link>
        <Link to="#" className="">
          <span className="material-icons-sharp">insights</span>
          <h3>Analytics</h3>
        </Link>
        <Link to="#">
          <span className="material-icons-sharp">mail_outline</span>
          <h3>Tickets</h3>
          <span className="message-count">27</span>
        </Link>
        <Link to="#">
          <span className="material-icons-sharp">inventory</span>
          <h3>Sale List</h3>
        </Link>
        <Link to="#">
          <span className="material-icons-sharp">report_gmailerrorred</span>
          <h3>Reports</h3>
        </Link>
        <Link to="#">
          <span className="material-icons-sharp">settings</span>
          <h3>settings</h3>
        </Link>
        <Link to="#">
          <span className="material-icons-sharp">add</span>
          <h3>New Login</h3>
        </Link>
        <Link to="#">
          <span className="material-icons-sharp">logout</span>
          <h3>Logout</h3>
        </Link>
      </div>
    </aside>

  );
};

export default Sidebar;
