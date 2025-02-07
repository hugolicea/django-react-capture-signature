import React from "react";
import PropTypes from "prop-types";

const SignaturePreview = ({ savedSignature }) => {
  return (
    <div className="signature-preview">
      {savedSignature && (
        <>
          <h2>Saved Signature</h2>
          <img src={savedSignature} alt="Saved Signature" />
        </>
      )}
    </div>
  );
};
SignaturePreview.propTypes = {
  savedSignature: PropTypes.string,
};

export default SignaturePreview;