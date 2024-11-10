import PlayerInput from "../components/PlayerInput";
import PlayerDisplay from "../components/PlayerDisplay";
import React from "react";
import "./index.css";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Управление пользователями</h1>
      <PlayerInput />
      <PlayerDisplay />
    </div>
  );
};

export default Home;
