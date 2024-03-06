import { createContext, useContext } from "react";

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div
        className="text-md w-full overflow-hidden rounded-lg border-[1px] border-gray-200 bg-white"
        role="table"
      >
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children, type = "primary" }) {
  const { columns } = useContext(TableContext);

  return (
    <div
      className={`grid items-center gap-10 border-b-[1px] border-stone-200 ${
        type === "secondary"
          ? "bg-stone-200 text-stone-800"
          : "bg-stone-800  text-stone-100"
      } px-5 py-3 font-semibold uppercase tracking-wide`}
      style={{ gridTemplateColumns: columns }}
      as="header"
      role="row"
    >
      {children}
    </div>
  );
}

function Row({ children, isOpen }) {
  const { columns } = useContext(TableContext);

  return (
    <div
      className={`grid items-center gap-10 p-5 last:border-none`}
      style={{
        gridTemplateColumns: columns,
        borderBottomWidth: isOpen ? 0 : "1px",
      }}
      role="row"
    >
      {children}
    </div>
  );
}

function Body({ data, render }) {
  if (!data?.length)
    return (
      <p className="m-10 text-center text-2xl font-medium">
        No Order data available!
      </p>
    );

  return <section className="my-2">{data.map(render)}</section>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;

export default Table;
