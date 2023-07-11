import React from 'react'
import { Link } from 'react-router-dom';
import { Orders } from './Orders';
const RecentOrders = () => {
    const [orders, setOrders] = React.useState(Orders);
    return (
        <div className='recent-orders'>
            <h2>Recent Orders</h2>
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
                            <td><Link to='/orders'>View</Link></td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <Link to='/orders'>View All Orders</Link>
        </div>
    )
}

export default RecentOrders
