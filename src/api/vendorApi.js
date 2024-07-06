import axios from "axios";

const API_URL = "http://localhost:1010/api/vendors";

export const getVendors = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createVendor = async (vendor) => {
  const response = await axios.post(API_URL, vendor);
  return response.data;
};

// Add more methods as needed for PUT, DELETE
