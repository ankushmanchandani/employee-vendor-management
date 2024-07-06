import axios from "axios";

const fetchEmployees = async () => {
  try {
    const response = await axios.get("http://localhost:1010/api/employees");
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching employees:", error);
  }
};

fetchEmployees();
