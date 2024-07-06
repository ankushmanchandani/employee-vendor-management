import React, { useState } from "react";
import { createEmployee } from "../api/employeeApi";
import "../styles/EmployeeForm.css";
import axios from "axios";

const EmployeeForm = ({ onAddEmployee }) => {
  const [employee, setEmployee] = useState({
    name: "",
    designation: "",
    ctc: "",
    email: "",
  });
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
    // Reset email error when the user changes the email
    if (name === "email") {
      setEmailError("");
    }
  };

  const checkEmailExists = async (email) => {
    try {
      const response = await axios.get(
        `http://localhost:1010/api/employees/check-email?email=${email}`
      );
      return response.data.exists;
    } catch (error) {
      console.error("Error checking email:", error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailExists = await checkEmailExists(employee.email);
    if (emailExists) {
      setEmailError("Email already exists");
      return;
    }
    try {
      await axios.post("http://localhost:1010/api/employees", employee);
      onAddEmployee();
      setEmployee({ name: "", designation: "", ctc: "", email: "" }); // Clear form
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={employee.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="designation"
        value={employee.designation}
        onChange={handleChange}
        placeholder="Designation"
        required
      />
      <input
        type="number"
        name="ctc"
        value={employee.ctc}
        onChange={handleChange}
        placeholder="CTC"
        required
      />
      <input
        type="email"
        name="email"
        value={employee.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      {emailError && <p className="error">{emailError}</p>}
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
