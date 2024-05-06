import axios from "axios";
import { useEffect, useState } from "react";

const GamesGrid = () => {
  const [games, setGames] = useState<Game[]>([]);

  const getGames = () => {
    const search = { Name: "Pokemon", ReleasedDate: "2004" };

    axios
      .post("https://localhost:7281/api/Game/SearchGames", search)
      .then((response) => {
        setGames(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <>
      <table className="table table-secondary">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Release Year</th>
            <th scope="col">Developers</th>
          </tr>
        </thead>
        <tbody>
          {games.length
            ? games.map((game) => (
                <tr key={game.id}>
                  <td>{game.name}</td>
                  <td>{game.yearReleased}</td>
                  <td>
                    {game.developers
                      .map((developer) => developer.name)
                      .join(", ")}
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </>
  );
};

export default GamesGrid;
