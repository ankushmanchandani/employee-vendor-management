import axios from "axios";

const API_URL = "http://localhost:1010/api/employees";

export const getEmployees = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createEmployee = async (employee) => {
  const response = await axios.post(API_URL, employee);
  return response.data;
};

// Add more methods as needed for PUT, DELETE
