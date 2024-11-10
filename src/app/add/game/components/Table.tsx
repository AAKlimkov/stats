// src/components/Table.tsx
import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table: React.FC = () => {
  const rowCount = 10;

  return (
    <table
      style={{ width: "100%", borderCollapse: "collapse", textAlign: "center" }}
    >
      <TableHeader />
      <tbody>
        {Array.from({ length: rowCount }).map((_, index) => (
          <TableRow key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
