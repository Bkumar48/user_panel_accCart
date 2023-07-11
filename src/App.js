import './App.css';
import Dashboard from './components/DashBoard/Dashboard';
import Sidebar from './components/global/Sidebar';
import RightSection from './components/DashBoard/RightSection';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <Sidebar/>
      <Dashboard/>
      <RightSection/>
      </div>
    </div>
  );
}

export default App;
