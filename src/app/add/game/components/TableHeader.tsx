// src/components/TableHeader.tsx
import React from "react";

const TableHeader: React.FC = () => {
  const headers = [
    "Ник",
    "Роль",
    "Победа",
    "Допы",
    "ЖК",
    "Штраф",
    "Д",
    "Ш",
    "ПУ ЛХ",
    "Вскрытия",
    "Выст в 9",
    "Голос в 9",
    "Пере 1",
    "Пере 2",
    "Ушел",
    "Убит",
    "Крит г.",
  ];

  return (
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
