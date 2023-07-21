import React from "react";
import logo from "../assets/sidebar/logo.png";
import { Link, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
const Sidebar = () => {
  const location = useLocation();
  const handleLogout = () => {
    try {
      Cookies.remove("token");
      setTimeout(() => {
        window.location.href = "http://localhost:3000/";
      }, 100);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
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
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          <span className="material-icons-sharp ">dashboard</span>
          <h3>Dashboard</h3>
        </Link>
        <Link to="http://localhost:3000/" >
          <span className="material-icons-sharp">language</span>
          <h3>Visit Site</h3>
        </Link>
        <Link to="/orders" className={location.pathname === '/orders' ? 'active' : location.pathname === '/invoice' ? 'active' : ''}>
          <span className="material-icons-sharp">paid</span>
          <h3>Orders </h3>
        </Link>
        <Link to="/tickets" className={location.pathname === '/tickets' ? 'active' : location.pathname === '/newticket' ? 'active' : location.pathname === '/conversation' ? 'active' : ''}>
          <span className="material-icons-sharp">mail_outline</span>
          <h3>Tickets</h3>
          <span className="message-count">27</span>
        </Link>
        <Link to="/settings" className={location.pathname === '/settings' ? 'active' : ''}>
          <span className="material-icons-sharp">settings</span>
          <h3>Settings</h3>
        </Link>
        <Link to="#" onClick={handleLogout}>
          <span className="material-icons-sharp">logout</span>
          <h3>Logout</h3>
        </Link>
      </div>
    </aside>

  );
};

export default Sidebar;
