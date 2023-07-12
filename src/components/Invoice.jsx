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
              
                <div className='invoice-footer'>
                    <p>Thank you for your business</p>
                </div>

            </div>

        </main>
    )
}

export default Invoice
