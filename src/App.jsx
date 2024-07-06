import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import EmployeesPage from "./pages/EmployeesPage";
import VendorsPage from "./pages/VendorsPage";
import SentEmailsPage from "./pages/SentEmailsPage";
import "./App.css";
import EmployeeList from "./components/EmployeeList";
import VendorList from "./components/VendorList";

import EmailLogs from "./components/EmailLogs";

const App = () => (
  <Router>
    <div className="App">
      <header>
        <h1>Employee Vendor Management</h1>
        <nav>
          <Link to="/employees">Add Employees</Link>
          <Link to="/vendors">Add Vendors</Link>
          <Link to="/sent-emails">Sent Emails</Link>
          <Link to="/employee-list">Employee List</Link>
          <Link to="/vendor-list">Vendor List</Link>
          <Link to="/email-list">Email List</Link>
        </nav>
      </header>
      <div className="page-container">
        <Routes>
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/vendors" element={<VendorsPage />} />
          <Route path="/sent-emails" element={<SentEmailsPage />} />
          <Route path="/employee-list" element={<EmployeeList />} />
          <Route path="/vendor-list" element={<VendorList />} />
          <Route path="/email-list" element={<EmailLogs />} />
          <Route path="*" element={<Navigate to="/employees" />} />{" "}
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
