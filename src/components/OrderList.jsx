import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'js-cookie';
const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const token = Cookies.get('token') || null;
    // Fetch data again when the token changes
    const getOrders = async() => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/user/order/getAllOrders?limit&skip&orderType=`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setOrders(response.data.data);
            console.log(response.data.data)
        } catch (error) {
            console.log(error.response.data.message);
            setOrders([]);
        }
    };
    useEffect(() => {
        if (token) {
            getOrders();
        }
    }, [token]);


    const convertDateFormat = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();
        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const amOrPm = hours >= 12 ? 'pm' : 'am';
      
        // Convert hours to 12-hour format
        if (hours > 12) {
          hours -= 12;
        }
        if (hours === 0) {
          hours = 12;
        }
      
        return `${day}/${month}/${year} ${hours}:${minutes}${amOrPm}`;
      };


    return (
        <main>
            <h1>Orders</h1>
{
    orders.length > 0 ? (
        <div className='recent-orders'>
               
        <table>
            <thead>
                <tr>
                    <th>Order no.</th>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Payment Status</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order, index) => (
                    <tr key={index}>
                        <td>{order.orderId}</td>
                        <td>{order?.items?.map((item)=>{
                            return(
                                <p>{item.productTile    }</p>
                            )
                        })}</td>
                        <td>$ {order.amount}</td>
                        <td className={order.payment_status === 'Refunded' ? 'danger' : order.payment_status === 'unpaid' ? 'warning' : 'primary'}>{order.payment_status}</td>
                        <td>{convertDateFormat(order.createdAt)}</td>
                        <td className={order.orderstatus === 'Refunded' ? 'danger' : order.orderstatus === 'pending' ? 'warning' : 'primary'}>{order.orderstatus}</td>
                        <td><Link to={`/userpanel/orders/invoice/${order.orderId}`}>View</Link></td>
                    </tr>
                ))}

            </tbody>
        </table>
        {/* <Link to='/orders'>View All Orders</Link> */}
    </div>
    ) : (
        <div className='recent-orders'>
            <h2>No Orders Found</h2>
        </div>
    )

}
        </main>
    )
}

export default OrderList
