"use client";

import { useState } from "react";
import { supabase } from "../utils/supabaseClient";

const PlayerInput: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);

  const savePlayer = async () => {
    if (!name) {
      setMessage("Введите имя пользователя");
      return;
    }

    const { error } = await supabase.from("players").insert([{ name }]);

    if (error) {
      setMessage(`Ошибка: ${error.message}`);
    } else {
      setMessage("Пользователь сохранён!");
      setName("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Введите имя"
      />
      <button onClick={savePlayer}>Сохранить</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PlayerInput;
