function SummaryRow({ title, value }) {
  return (
    <div className="flex items-center justify-between">
      <span>{title}</span>
      <span>{value}</span>
    </div>
  );
}

export default SummaryRow;
