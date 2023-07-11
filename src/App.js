import './App.css';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Sidebar from './components/global/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <Sidebar/>
      <Dashboard/>
      <Users/>
      </div>
    </div>
  );
}

export default App;
