import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/EmailLogs.css";

function EmailLogs() {
  const [emailLogs, setEmailLogs] = useState([]);

  useEffect(() => {
    fetchEmailLogs();
  }, []);

  const fetchEmailLogs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1010/api/emailLogs/all"
      );
      setEmailLogs(response.data);
    } catch (error) {
      console.error("Error fetching email logs:", error);
    }
  };

  return (
    <div className="email-logs-container">
      <h2>Email Logs</h2>
      <div className="email-logs">
        {emailLogs.length > 0 ? (
          emailLogs.map((log, index) => (
            <div key={index} className="email-log">
              <p>
                <strong>Email:</strong> {log.email}
              </p>
            </div>
          ))
        ) : (
          <p>No emails have been sent.</p>
        )}
      </div>
    </div>
  );
}

export default EmailLogs;
