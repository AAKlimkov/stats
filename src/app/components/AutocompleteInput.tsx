"use client";

import React, { useState } from "react";

interface AutocompleteInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
}

const AutocompleteInput: React.FC<AutocompleteInputProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder = "",
}) => {
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    onChange(query);
    if (query) {
      setFilteredOptions(
        options.filter((option) =>
          option.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredOptions(options);
    }
  };

  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsVisible(false);
  };

  const handleBlur = () => {
    setTimeout(() => setIsVisible(false), 100);
  };

  return (
    <div className="flex flex-col relative">
      <label className="font-medium text-sm">{label}</label>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onFocus={() => setIsVisible(true)}
        onBlur={handleBlur}
        onChange={handleInputChange}
        className="border border-gray-300 rounded p-2 w-96"
      />
      {isVisible && filteredOptions.length > 0 && (
        <div className="absolute bg-white border border-gray-300 mt-1 max-h-48 overflow-auto z-10 top-16 w-96">
          {" "}
          {/* Увеличена ширина списка */}
          {filteredOptions.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionClick(option)}
              className="p-2 cursor-pointer hover:bg-gray-200"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutocompleteInput;
