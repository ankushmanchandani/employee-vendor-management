import React, { useState } from "react";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
const EmployeePage = () => {
  const [updateList, setUpdateList] = useState(false);

  const handleAddEmployee = () => {
    setUpdateList(!updateList);
  };

  return (
    <div>
      <h1>Employee</h1>
      <EmployeeForm onAddEmployee={handleAddEmployee} />
      {/* <EmployeeList key={updateList} /> */}
    </div>
  );
};

export default EmployeePage;
