import axios from "axios";
import { useEffect, useState } from "react";

const GamesGrid = () => {
  const [games, setGames] = useState<any[]>([]);

  const getGames = () => {
    const search = { Name: "Pokemon", ReleasedDate: "2004" };

    axios
      .post("https://localhost:7281/api/Game/SearchGames", search)
      .then((response) => {
        console.log(response);
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
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Japanese Name</th>
            <th scope="col">Release Year</th>
          </tr>
        </thead>
        <tbody>
          {games.length
            ? games.map((game) => (
                <tr key={game.id}>
                  <th scope="row" font-color="red">
                    {game.id}
                  </th>
                  <td>{game.names.international}</td>
                  <td>{game.names.japanese}</td>
                  <td>{game.released}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </>
  );
};

export default GamesGrid;
