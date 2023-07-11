import React from "react";
import Users from "./Users";
import RecentOrders from "./RecentOrders";

const Dashboard = () => {
  return (

    <main>
      <h1>Analytics</h1>
      {/* Analyses */}
      <div className="analyse">
        <div className="sales">
          <div className="status">
            <div className="info">
              <h3>Total Sales</h3>
              <h1>$65,024</h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="percentage">
                <p>+81%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="visits">
          <div className="status">
            <div className="info">
              <h3>Site Visit</h3>
              <h1>69</h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="percentage">
                <p>-20%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="searches">
          <div className="status">
            <div className="info">
              <h3>Searches</h3>
              <h1>69</h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="percentage">
                <p>+3%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Users />
      <RecentOrders />
    </main>

  );
};

export default Dashboard;