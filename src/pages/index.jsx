import React from "react";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";

const Home = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <EmployeeForm />
      <EmployeeList />
    </div>
  );
};

export default Home;
