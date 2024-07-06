import React, { useEffect, useState } from "react";
import { getVendors } from "../api/vendorApi";
import "../styles/VendorList.css";

const VendorList = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const fetchVendors = async () => {
      const data = await getVendors();
      setVendors(data);
    };
    fetchVendors();
  }, []);

  return (
    <div className="vendor-list">
      <h2>Vendor List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Upi</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor) => (
            <tr key={vendor.upi}>
              <td>{vendor.name}</td>
              <td>{vendor.email}</td>
              <td>{vendor.upi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VendorList;
