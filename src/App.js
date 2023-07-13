import './App.css';
import Dashboard from './components/DashBoard/Dashboard';
import Sidebar from './components/global/Sidebar';
import RightSection from './components/DashBoard/RightSection';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderList from './components/OrderList';
import Ticketlist from './components/Ticketlist';
import NewTicket from './components/NewTicket';
import Conversation from './components/Conversation';
import Invoice from './components/Invoice';
import Passchange from './components/Passchange';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.addEventListener('message', (event) => {
      if (event.origin === 'http://localhost:3001' && event.data.type === 'sessionData') {
        const data = event.data.data;
        // Store the received data in session storage
        sessionStorage.setItem('myData', JSON.stringify(data));
        console.log("aa gya data", data);
      }
    });
  }, [sessionStorage.getItem('myData')]);
  return (
    <div className="App">
      <div className='container'>
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<OrderList/>} />
            <Route path="/tickets" element={<Ticketlist/>} />
            <Route path="/newticket" element={<NewTicket/>} />
            <Route path="/conversation" element={<Conversation/>} />
            <Route path="/invoice" element={<Invoice/>} />
            <Route path="/settings" element={<Passchange/>} />
          </Routes>
          <RightSection />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
