import React, { useState } from "react";
import { createVendor } from "../api/vendorApi";
import "../styles/VendorForm.css";
import axios from "axios";

const VendorForm = ({ onAddvendor }) => {
  const [vendor, setVendor] = useState({
    name: "",
    email: "",
    upi: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendor((prevVendor) => ({
      ...prevVendor,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //await createVendor(vendor);
    // Handle success or error
    try {
      await axios.post("http://localhost:1010/api/vendors", vendor);
      onAddvendor();
      setVendor({ name: "", email: "", upi: "" }); // Clear form
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="vendor-form">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={vendor.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={vendor.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="upi"
        placeholder="UPI"
        value={vendor.upi}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Vendor</button>
    </form>
  );
};

export default VendorForm;
