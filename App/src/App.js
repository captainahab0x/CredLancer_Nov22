import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './assets/css/style.css'
import Home from './pages/Home'
import Staking from './pages/Staking'
import Snuck from './pages/Snuck'
import Tokenomics from './pages/Tokenomics'
import './style.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/snuck" element={<Snuck />}></Route>
        <Route path="/staking" element={<Staking />}></Route>
        <Route path="/tokenomics" element={<Tokenomics />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
