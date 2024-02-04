import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Timesheet from './pages/Timesheet.jsx';
import Leave from './pages/Leave.jsx';
import Workfromhome from './pages/Workfromhome.jsx';
import Feedback from './pages/Feedback.jsx';
import Survey from './pages/Survey.jsx';
import ServiceDesk from './pages/ServiceDesk.jsx';
import Forms from './pages/Forms.jsx';
import Travel from './pages/Travel.jsx';
import Expenses from './pages/Expenses.jsx';
import Resourcing from './pages/Resourcing.jsx';
import Logout from './pages/Logout.jsx';


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/timesheet" element={< Timesheet/>} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/workfromhome" element={<Workfromhome />} />
          <Route path="/feedback" element={<Feedback/>} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/Servicedesk" element={<ServiceDesk />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/Resourcing" element={<Resourcing />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;