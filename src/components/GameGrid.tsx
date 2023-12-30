import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

//Properties for each game
interface Game {
  id: number;
  name: string;
}

//Properties for fetching each game
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  // Need a state variable for storing our game objects, and for error messages
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  //Use 'effect hook' to send a fetch request to the backend
  useEffect(() => {
    //Call '.get' with the '/games' endpoint while providing a generic type argument of our interface
    apiClient
      .get<FetchGamesResponse>("/games")

      //'.then' needs interfaces to allow us to call 'setGames' with the proper structure
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
