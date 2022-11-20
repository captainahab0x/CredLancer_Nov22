
import './App.css';

import { HashRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import TasksPage from './pages/TasksPage';
import SignUpFreelancerPage from './pages/SignUpFreelancerPage';
import SignUpOrganizationPage from './pages/SignUpOrganizationPage';

import MenuComponent from './components/MenuComponent';

function App() {


  return (
      <HashRouter>
        <MenuComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Dashboard" element={<DashboardPage />} />
        <Route path="/Tasks" element={<TasksPage />} />
        <Route path="/CreateProfile" element={<SignUpFreelancerPage />} />
        <Route path="/CreateOrganization" element={<SignUpOrganizationPage />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </HashRouter>

    );
}

export default App;
