import React from "react";
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
              <h3>Orders</h3>
              <h1>65</h1>
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
              <h3>Cart</h3>
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
              <h3>Tickets</h3>
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
      {/* <Users /> */}
      <RecentOrders />
    </main>

  );
};

export default Dashboard;
