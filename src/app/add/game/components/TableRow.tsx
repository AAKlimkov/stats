import React from "react";
import TableCell from "./TableCell";

const TableRow: React.FC = () => {
  const cellPlaceholders = [
    { placeholder: "Ник", type: "text" },
    {
      placeholder: "Роль",
      type: "select",
      options: ["Мир", "Дон", "Шер", "Маф"],
    },
    { placeholder: "Победа", type: "checkbox" },
    {
      placeholder: "Допы",
      type: "number",
      min: 0,
      max: 5,
      step: 0.25,
      defaultValue: 2.5,
    },
    { placeholder: "ЖК", type: "checkbox" },
    { placeholder: "Штраф", type: "number", min: 0, max: 3, step: 0.5 },
    { placeholder: "Д", type: "checkbox" },
    { placeholder: "Ш", type: "checkbox" },
    { placeholder: "ПУ ЛХ", type: "text" },
    { placeholder: "Вскрытия", type: "text" },
    { placeholder: "Выст в 9", type: "text" },
    { placeholder: "Голос в 9", type: "text" },
    { placeholder: "Пере 1", type: "text" },
    { placeholder: "Пере 2", type: "text" },
    { placeholder: "Ушел в", type: "number", min: 0, max: 10, step: 1 },
    { placeholder: "Убит", type: "text" },
    { placeholder: "Крит г.", type: "checkbox" },
  ];

  return (
    <tr className="border-b">
      {cellPlaceholders.map((cell, index) => (
        <TableCell
          key={index}
          placeholder={cell.placeholder}
          type={cell.type}
          options={cell.options}
          min={cell.min}
          max={cell.max}
          step={cell.step}
        />
      ))}
    </tr>
  );
};

export default TableRow;
