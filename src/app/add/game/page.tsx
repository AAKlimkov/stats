import React from "react";
import Table from "./components/Table";
import GeneralInfo from "./components/GeneralInfo";

const Page: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Шаблон таблицы</h1>
      <GeneralInfo />
      <Table />
    </div>
  );
};

export default Page;
