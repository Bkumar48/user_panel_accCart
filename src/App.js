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

const App = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (urlParams.has('token')) {
      const token = urlParams.get('token');
      sessionStorage.setItem('token', token);
      setToken(token);
    }
  }, []);

  if (!token) {
    return null; // Render nothing until token is stored in sessionStorage
  }

  return (
    <div className="App">
      <div className='container'>
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<OrderList />} />
            <Route path="/tickets" element={<Ticketlist />} />
            <Route path="/newticket" element={<NewTicket />} />
            <Route path="/conversation" element={<Conversation />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/settings" element={<Passchange />} />
          </Routes>
          <RightSection />
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

