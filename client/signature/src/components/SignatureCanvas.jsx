import React, { useRef, useState, forwardRef, useImperativeHandle } from "react";
import PropTypes from "prop-types";

const SignatureCanvas = forwardRef(function SignatureCanvas({ onSignatureChange }, ref) {
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);

  useImperativeHandle(ref, () => ({
    isCanvasEmpty: () => {
      const canvas = canvasRef.current;
      const blank = document.createElement("canvas");
      blank.width = canvas.width;
      blank.height = canvas.height;
      return canvas.toDataURL() === blank.toDataURL();
    },
    clearCanvas: () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      onSignatureChange(null);
    }
  }));

  const startDrawing = (e) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const endDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL(); // Get base64 encoded image
    onSignatureChange(dataURL);
  };

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={200}
      className="signature-canvas"
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={endDrawing}
      onMouseOut={endDrawing}
    />
  );
});

SignatureCanvas.propTypes = {
  onSignatureChange: PropTypes.func.isRequired,
};

export default SignatureCanvas;