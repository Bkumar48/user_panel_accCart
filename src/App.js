import './App.css';
import Dashboard from './components/DashBoard/Dashboard';
import Sidebar from './components/global/Sidebar';
import RightSection from './components/DashBoard/RightSection';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import OrderList from './components/OrderList';
import Ticketlist from './components/Ticketlist';
import NewTicket from './components/NewTicket';
import Conversation from './components/Conversation';
import Invoice from './components/Invoice';

function App() {
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
            <Route path="/invioce" element={<Invoice/>} />
          </Routes>
          <RightSection />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
