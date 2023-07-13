import React, { useState } from 'react'
import { Orders } from './DashBoard/Orders'
import { Link } from 'react-router-dom'
const OrderList = () => {
    const [orders, setOrders] = useState(Orders);
    return (
        <main>
            <h1>Orders</h1>
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
                                <td>{order.order_no}</td>
                                <td>{order.productName}</td>
                                <td>{order.price}</td>
                                <td className={order.paymentStatus === 'Refunded' ? 'danger' : order.paymentStatus === 'Due' ? 'warning' : 'primary'}>{order.paymentStatus}</td>
                                <td>{order.date}</td>
                                <td>{order.status}</td>
                                <td><Link to='/invoice'>View</Link></td>
                            </tr>
                        ))}

                    </tbody>
                </table>
                {/* <Link to='/orders'>View All Orders</Link> */}
            </div>
        </main>
    )
}

export default OrderList
