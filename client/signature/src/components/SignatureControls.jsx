import React, { useState } from "react";
import axios from "axios";

const SignatureControls = ({
  signatureData,
  onSaveSuccess,
  onFetchSuccess,
  clearCanvas,
  isCanvasEmpty,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [signatureId, setSignatureId] = useState("");

  const saveSignature = async () => {
    if (isCanvasEmpty()) {
      alert("No signature to save!");
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post(
        "/api/signature/",
        { image_data: signatureData },
        {
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken"),
          },
        }
      );
      if (response.status === 201) {
        alert("Signature saved successfully!");
        onSaveSuccess(response.data.id);
        clearCanvas(); // Clear the canvas after saving
      } else {
        alert("Error saving signature:" + JSON.stringify(response.data));
      }
    } catch (error) {
      alert("Error saving signature:" + error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSavedSignatureById = async (id) => {
    try {
      const response = await axios.get(`/api/signature/${id}/`);
      if (response.status === 200) {
        onFetchSuccess(response.data.image_data);
      } else {
        alert(
          "Error fetching saved signature:" + JSON.stringify(response.data)
        );
      }
    } catch (error) {
      alert("Error fetching saved signature:" + error);
    }
  };

  // Helper function to get CSRF token (Important for Django)
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  return (
    <div className="signature-controls">
      {onSaveSuccess && (
        <>
          <div className="button-group">
            <button onClick={saveSignature} className="btn" disabled={isLoading}>
              Save
            </button>
            <button onClick={clearCanvas} className="btn">
              Clear
            </button>
          </div>
          <div>{isLoading && <div className="spinner">...</div>}</div>
        </>
      )}
      {onFetchSuccess && (
        <div className="fetch-signature">
          <input
            type="number"
            placeholder="Enter Signature ID"
            value={signatureId}
            onChange={(e) => setSignatureId(e.target.value)}
            className="input-id"
          />
          <button
            onClick={() => fetchSavedSignatureById(signatureId)}
            className="btn"
          >
            Fetch Signature by ID
          </button>
        </div>
      )}
    </div>
  );
};

export default SignatureControls;