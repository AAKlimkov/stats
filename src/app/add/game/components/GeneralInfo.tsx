"use client";

import React, { useState } from "react";
import { VictoryType } from "@/app/types/VictoryType";
import AutocompleteInput from "@/app/components/AutocompleteInput";

const GeneralInfo: React.FC = () => {
  const [tournament, setTournament] = useState<string>("");
  const [judge, setJudge] = useState<string>("");
  const [result, setResult] = useState<string>("");

  return (
    <div className="flex flex-wrap gap-4 p-4 bg-gray-100 border border-gray-300 rounded mb-4 relative">
      <div className="flex flex-col">
        <label className="font-medium text-sm">Дата</label>
        <input
          type="date"
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>
      <AutocompleteInput
        label="Турнир"
        value={tournament}
        onChange={setTournament}
        options={["Турнир А", "Турнир Б", "Турнир В"]}
        placeholder="Название турнира"
      />
      <div className="flex flex-col">
        <label className="font-medium text-sm">Серия</label>
        <input
          type="text"
          placeholder="Серия"
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-medium text-sm">Игра</label>
        <input
          type="number"
          placeholder="Номер игры"
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>
      <AutocompleteInput
        label="Судья"
        value={judge}
        onChange={setJudge}
        options={["Судья 1", "Судья 2", "Судья 3"]}
        placeholder="Имя судьи"
      />
      <AutocompleteInput
        label="Результат"
        value={result}
        onChange={setResult}
        options={Object.values(VictoryType)}
        placeholder="Результат"
      />
    </div>
  );
};

export default GeneralInfo;
