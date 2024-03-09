function Spinner({ scale = 100 }) {
  return (
    <div style={{ scale: scale + "%" }}>
      <div className="spinner"></div>
    </div>
  );
}

export default Spinner;
