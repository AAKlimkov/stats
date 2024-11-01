import PlayerDisplay from "@/components/PlayerDisplay";
import PlayerInput from "@/components/PlayerInput";

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
