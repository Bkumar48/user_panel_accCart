import React from 'react'
import { Link } from 'react-router-dom';

const Ticketlist = () => {
    return (
        <main>
            <div className='ticket-head'>
                <h1>Tickets</h1>
                <div className='create-ticket'>
                <span className='material-icons-sharp'>add</span>
                <Link to='/newticket'>Create Ticket</Link>
                </div>
            </div>
            <div className='ticket-list '>
                <table>
                    <thead>
                        <tr>
                            <th>Ticket ID</th>
                            <th>Subject</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>123456</td>
                            <td>Need help with my account</td>
                            <td className='danger'>Pending</td>
                            <td>12/12/2020</td>
                            <td><Link to="/conversation">View</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </main>
    )
}

export default Ticketlist
