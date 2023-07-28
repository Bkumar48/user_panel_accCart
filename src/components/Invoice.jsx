import React, { useEffect, useState } from 'react';
import logo from './assets/sidebar/logo.png'
import axios from 'axios';
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';
const Invoice = () => {
    const [order, setOrder] = useState([]);
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const token = Cookies.get('token') || null;
    const { id } = useParams();
    //Fetch order data
    const getOrder = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/order/getOrder?orderId=${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setOrder(response.data.data);
            console.log(response.data.data)
        } catch (error) {
            console.log(error.response.data.message);
            setOrder([]);
        }
        setLoading(false);
    };

    const getUser = async () => {
        setLoading(true);
        try {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/user/getUser/?userId=${order.userId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setUser(response.data.data);
            console.log(response.data.data)
        } catch (error) {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (token) {
            getOrder();
            getUser();
        }
    }, [token]);


    return (
        <main>
            <div className='invoice-header'>
                <h1>Invoice</h1>
                <button className='btn'>Download</button>
            </div>
            <div className='invoice'>
                <div className='invoice-head'>
                    <div className='invoice-head-text'>
                        <h1>Invoice</h1>
                        <p>Invoice #12345</p>
                    </div>
                    <img src={logo} alt='logo' />
                </div>
                <div className='invoice-body'>
                    <table>
                        <tr>
                            <td>
                                <h3>Bill from :</h3>
                                <h2>Accountscart</h2>
                            </td>
                            <td>
                                <h3>Bill To :</h3>
                                <h2>{user.firstName + " " + user.lastName}</h2>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3>Issued on :</h3>
                                <h2>12/12/2020</h2>
                            </td>
                            <td>
                                <h3>Due on :</h3>
                                <h2>12/12/2020</h2>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className='invoice-table'>
                    <table>
                        <tr>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total Amount</th>
                        </tr>
                        <tr>
                            <td>Item 1</td>
                            <td>$ 100</td>
                            <td>1</td>
                            <td>100</td>
                        </tr>

                    </table>
                </div>
                <div className='invoice-total'>
                    <table>
                        <tr>
                            <td>
                                Subtotal
                            </td>
                            <td>
                                $ 400
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Tax
                            </td>
                            <td>
                                $ 20
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Total
                            </td>
                            <td>
                                $ 420
                            </td>
                        </tr>
                    </table>
                </div>

                <div className='invoice-footer'>
                    <p>Thank you for your business</p>
                </div>

            </div>

        </main>
    )
}

export default Invoice
