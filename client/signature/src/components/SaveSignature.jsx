import React, { useState, useRef } from "react";
import SignatureCanvas from "./SignatureCanvas";
import SignatureControls from "./SignatureControls";

const SaveSignature = () => {
  const [signatureData, setSignatureData] = useState(null);
  const canvasRef = useRef(null);

  const handleSignatureChange = (dataURL) => {
    setSignatureData(dataURL);
  };

  const handleSaveSuccess = (id) => {
    setSignatureData(null);
    alert(`Signature saved with ID: ${id}`);
    clearCanvas(); // Clear the canvas after saving
  };

  const clearCanvas = () => {
    canvasRef.current.clearCanvas();
    setSignatureData(null);
  };

  const isCanvasEmpty = () => {
    return canvasRef.current.isCanvasEmpty();
  };

  return (
    <div className="signature-container">
      <h1>Save Signature</h1>
      <SignatureCanvas onSignatureChange={handleSignatureChange} ref={canvasRef} />
      <SignatureControls
        signatureData={signatureData}
        onSaveSuccess={handleSaveSuccess}
        clearCanvas={clearCanvas}
        isCanvasEmpty={isCanvasEmpty}
      />
    </div>
  );
};

export default SaveSignature;