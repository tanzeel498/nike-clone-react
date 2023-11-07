function Checkbox({ children, validation, id }) {
  return (
    <div className="checkbox-wrapper">
      <input id={id} type="checkbox" {...validation} />
      <label htmlFor={id}>
        <span>
          <svg width="12px" height="10px" viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        {children}
      </label>
    </div>
  );
}

export default Checkbox;