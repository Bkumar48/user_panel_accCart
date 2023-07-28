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
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const tokenFromCookies = Cookies.get('token');
    if (tokenFromCookies) {
      // If token is found in cookies, set it in the state (or wherever you need it)
      setToken(tokenFromCookies);
    }

  }, []); // The empty dependency array ensures this effect runs only once on component mount

  if (!token) {
    return null; // Render nothing until token is stored in sessionStorage
  }

  return (
    <div className="App">
      <div className='container'>
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/userpanel/" element={<Dashboard />} />
            <Route path="/userpanel/orders" element={<OrderList />} />
            <Route path="/userpanel/tickets" element={<Ticketlist />} />
            <Route path="/userpanel/newticket" element={<NewTicket />} />
            <Route path="/userpanel/conversation" element={<Conversation />} />
            <Route path="/userpanel/orders/invoice/:id" element={<Invoice />} />
            <Route path="/userpanel/settings" element={<Passchange />} />
          </Routes>
          <RightSection />
          <Toaster />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;




// import './App.css';
// import Dashboard from './components/DashBoard/Dashboard';
// import Sidebar from './components/global/Sidebar';
// import RightSection from './components/DashBoard/RightSection';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import OrderList from './components/OrderList';
// import Ticketlist from './components/Ticketlist';
// import NewTicket from './components/NewTicket';
// import Conversation from './components/Conversation';
// import Invoice from './components/Invoice';
// import Passchange from './components/Passchange';
// import { useEffect } from 'react';
// const App = () => {
//   const urlParams = new URLSearchParams(window.location.search);
//  if(urlParams.has('token')){
//     var token = urlParams.get('token');
//   }

//   useEffect(() => {
//     if (token) {
//       sessionStorage.setItem('token', token);
//     }
//   }, []);


//   return (
//     <div className="App">
//       <div className='container'>
//         <BrowserRouter>
//           <Sidebar />
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/orders" element={<OrderList />} />
//             <Route path="/tickets" element={<Ticketlist />} />
//             <Route path="/newticket" element={<NewTicket />} />
//             <Route path="/conversation" element={<Conversation />} />
//             <Route path="/invoice" element={<Invoice />} />
//             <Route path="/settings" element={<Passchange />} />
//           </Routes>
//           <RightSection />
//         </BrowserRouter>
//       </div>
//     </div>
//   );
// }

// export default App;

