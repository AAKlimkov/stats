"use client";

import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table: React.FC = () => {
  const rowCount = 10;

  // Состояние видимости колонок
  const [visibleColumns, setVisibleColumns] = useState<Record<string, boolean>>(
    {
      Ник: true,
      Роль: true,
      Победа: true,
      Допы: true,
      ЖК: true,
      Штраф: true,
      Д: true,
      Ш: true,
      "ПУ ЛХ": true,
      Вскрытия: true,
      "Выст в 9": true,
      "Голос в 9": true,
      "Пере 1": false,
      "Пере 2": false,
      Ушел: true,
      Убит: true,
      "Крит г.": true,
    }
  );

  const toggleColumnVisibility = (column: string) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [column]: !prev[column],
    }));
  };

  return (
    <div>
      <div>
        {Object.keys(visibleColumns).map((column) => (
          <label key={column} style={{ marginRight: "10px" }}>
            <input
              type="checkbox"
              checked={visibleColumns[column]}
              onChange={() => toggleColumnVisibility(column)}
            />
            {column}
          </label>
        ))}
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        <TableHeader visibleColumns={visibleColumns} />
        <tbody>
          {Array.from({ length: rowCount }).map((_, index) => (
            <TableRow key={index} visibleColumns={visibleColumns} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
