"use client";

import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";

interface User {
  id: number;
  name: string;
}

const PlayerDisplay: React.FC = () => {
  const [userId, setUserId] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
  const [allPlayers, setAllPlayers] = useState<User[]>([]);
  const [message, setMessage] = useState<string | null>(null);

  const getUserById = async () => {
    const id = parseInt(userId);
    if (isNaN(id)) {
      setMessage("Введите корректный ID");
      return;
    }

    const { data, error } = await supabase
      .from("players")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      setMessage(`Ошибка: ${error.message}`);
      setUser(null);
    } else {
      setUser(data);
      setMessage(null);
    }
  };

  const getAllPlayers = async () => {
    const { data, error } = await supabase.from("players").select("*");

    if (error) {
      setMessage(`Ошибка: ${error.message}`);
    } else {
      setAllPlayers(data);
    }
  };

  useEffect(() => {
    getAllPlayers();
  }, []);

  return (
    <div>
      <div>
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Введите ID"
        />
        <button onClick={getUserById}>Получить пользователя</button>
      </div>
      {user && (
        <div>
          <h3>Пользователь с ID {user.id}:</h3>
          <p>Имя: {user.name}</p>
        </div>
      )}
      <button onClick={getAllPlayers}>Получить всех пользователей</button>
      {allPlayers.length > 0 && (
        <div>
          <h3>Все пользователи:</h3>
          <ul>
            {allPlayers.map((u) => (
              <li key={u.id}>
                ID: {u.id}, Имя: {u.name}
              </li>
            ))}
          </ul>
        </div>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default PlayerDisplay;
