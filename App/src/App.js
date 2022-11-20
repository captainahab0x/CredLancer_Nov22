
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";     

import { HashRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import TasksPage from './pages/TasksPage';
import SignUpFreelancerPage from './pages/SignUpFreelancerPage';
import SignUpOrganizationPage from './pages/SignUpOrganizationPage';

import HeaderComponent from './components/HeaderComponent';
import MenuComponent from './components/MenuComponent';
import FooterComponent from './components/FooterComponent';

function App() {


  return (
      <HashRouter>
        <HeaderComponent />
        <MenuComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Dashboard" element={<DashboardPage />} />
        <Route path="/Tasks" element={<TasksPage />} />
        <Route path="/CreateProfile" element={<SignUpFreelancerPage />} />
        <Route path="/CreateOrganization" element={<SignUpOrganizationPage />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
      <FooterComponent />
    </HashRouter>

    );
}

export default App;
