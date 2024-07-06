import React, { useState } from "react";
import VendorForm from "../components/VendorForm";
import VendorList from "../components/VendorList";

const VendorsPage = () => {
  const [updateList, setUpdateList] = useState(false);

  const handleAddVendor = () => {
    setUpdateList(!updateList);
  };
  return (
    <div>
      <h1>Vendors</h1>
      <VendorForm onAddvendor={handleAddVendor} />
      {/* <VendorList key={updateList} /> */}
    </div>
  );
};

export default VendorsPage;
