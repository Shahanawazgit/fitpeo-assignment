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
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
