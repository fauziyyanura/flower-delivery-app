import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const SuccessMessage = () => {
  const [searchParams] = useSearchParams();
  const [sessionData, setSessionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const sessionId = searchParams.get("session_id");
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionId) {
      console.warn("No session_id found in URL.");
      setError("Missing session ID. Unable to retrieve payment details.");
      setLoading(false);
      return;
    }

    fetch(`https://flower-delivery-app.onrender.com/api/payments/session/${sessionId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch session details");
        }
        return res.json();
      })
      .then((data) => {
        setSessionData(data);
        console.log("✅ Payment session:", data);
      })
      .catch((err) => {
        console.error("❌ Failed to fetch session:", err);
        setError("Unable to load payment details. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [sessionId]);

  return (
    <div className="success-container">
      <h1>🎉 Payment Successful!</h1>

      {loading ? (
        <p>Loading payment details...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : sessionData ? (
        <div>
          <p>
            Thank you, your payment of{" "}
            <strong>${(sessionData.amount_total / 100).toFixed(2)}</strong> was successful.
          </p>
          <p>Transaction ID: {sessionData.payment_intent?.id || "Unavailable"}</p>
          <button onClick={() => navigate("/")}>Return to Home</button>
        </div>
      ) : (
        <p>No session data available.</p>
      )}
    </div>
  );
};

export default SuccessMessage;
