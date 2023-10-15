import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainDash from './components/mainDash/MainDash';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<MainDash />} />
            <Route exact path="/Dashboard" element={<MainDash />} />
            <Route exact path="/Product" element={<MainDash />} />
            <Route exact path="/Customers" element={<MainDash />} />
            <Route exact path="/Income" element={<MainDash />} />
            <Route exact path="/Promote" element={<MainDash />} />
            <Route exact path="/Help" element={<MainDash />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
