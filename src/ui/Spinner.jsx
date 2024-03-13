function Spinner({ scale = 100, ...props }) {
  return (
    <div style={{ scale: scale + "%" }} {...props}>
      <div className="spinner"></div>
    </div>
  );
}

export default Spinner;
