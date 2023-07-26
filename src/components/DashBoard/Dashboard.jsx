import React,{useEffect,useState} from "react";
import RecentOrders from "./RecentOrders";
import axios from "axios";
import Cookies from "js-cookie";

const Dashboard = () => {
   const [cartCount, setCartCount] = useState([]);
   const [orders, setOrders] = useState([]);
   const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = Cookies.get('token') || null;

  const getCart = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/cart/getCart`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setCartCount(response.data.data.items.length);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setCartCount(0);
      setLoading(false);
    }
  };


  // get orders counts
  const getOrders = async() => {
    try {
      setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/user/order/getAllOrders?limit&skip&orderType=`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setOrders(response.data.countOrder);
        setLoading(false);
    } catch (error) {
        console.log(error.response.data.message);
        setOrders([]);
    }
};


useEffect(() => {
  // Fetch data again when the token changes
  if (token) {
    getCart();
    getOrders();
  }
}, [token]);
  


  return (

    <main>
      <h1>Analytics</h1>
      {/* Analyses */}
      <div className="analyse">
        <div className="sales">
          <div className="status">
            <div className="info">
              <h3>Orders</h3>
              <h1>{orders > 0 ? orders : 0}</h1>
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
              <h1>{cartCount !== null && cartCount }</h1>
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
              <h1>{tickets > 0 ? tickets : 0}</h1>
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
