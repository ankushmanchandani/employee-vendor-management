import React, { useState } from "react";
import axios from "axios";
import "../styles/EmailForm.css";

function EmailForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setMessage(""); // Clear previous messages
  };

  const handleSendEmail = async () => {
    try {
      const response = await axios.get(
        `http://localhost:1010/api/vendor/${email}`
      );
      const vendor = response.data;
      const emailMessage = `Mock email sent to ${vendor.email}: Sending payments to vendor ${vendor.name} at UPI ${vendor.upi}`;
      setMessage(emailMessage);
      // Log the email
      await axios.post("http://localhost:1010/api/emailLogs/save", {
        email: vendor.email,
      });
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setMessage("Vendor email not present.");
      } else {
        setMessage("Error fetching vendor data: " + error.message);
      }
    }
  };

  return (
    <div className="email-container">
      <h2>Send Email to Vendor</h2>
      <div className="email-form">
        <label>
          Vendor Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <button onClick={handleSendEmail}>Send Email</button>
      </div>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default EmailForm;
