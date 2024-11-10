import React from "react";

interface TableCellProps {
  placeholder: string;
  type?: string; // "text" | "checkbox" | "number" | "select"
  options?: string[]; // Для select
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: string | number; // Для числа или текста
}

const TableCell: React.FC<TableCellProps> = ({
  placeholder,
  type = "text",
  options,
  min,
  max,
  step,
  defaultValue,
}) => {
  return (
    <td className="border p-2 min-w-[40px]">
      {type === "select" ? (
        <select className="w-full border border-gray-300 rounded p-1">
          <option value="" disabled>
            {placeholder}
          </option>
          {options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          placeholder={type === "text" ? placeholder : undefined}
          min={type === "number" ? min : undefined}
          max={type === "number" ? max : undefined}
          step={type === "number" ? step : undefined}
          defaultValue={defaultValue}
          className="w-full border border-gray-300 rounded p-1"
        />
      )}
    </td>
  );
};

export default TableCell;
