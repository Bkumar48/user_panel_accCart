import React from 'react'
import logo from './assets/sidebar/logo.png'
const Invoice = () => {
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
                                <h2>John Doe</h2>
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
