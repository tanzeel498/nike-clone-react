function Spinner({ scale = 100 }) {
  return (
    <div className={`scale-${scale}`}>
      <div className="spinner "></div>
    </div>
  );
}

export default Spinner;
