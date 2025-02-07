import React, { useState } from "react";
import SignatureControls from "./SignatureControls";
import SignaturePreview from "./SignaturePreview";

const ConsultSignature = () => {
  const [savedSignature, setSavedSignature] = useState(null);

  const handleFetchSuccess = (imageData) => {
    setSavedSignature(imageData);
  };

  return (
    <div className="signature-container">
      <h1>Consult Signature</h1>
      <SignatureControls onFetchSuccess={handleFetchSuccess} />
      <SignaturePreview savedSignature={savedSignature} />
    </div>
  );
};

export default ConsultSignature;
