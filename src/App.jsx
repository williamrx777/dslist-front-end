import React, { useState, useEffect } from 'react';

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('https://dslist-rw1h.onrender.com/games')
      .then(response => response.json())
      .then(data => setGames(data));
  }, []);

  return (
    <div>
      <h2>Lista de Jogos</h2>
      <ol>
        {games.map(game => (
          <li key={game.id}>
            <p>{game.title}</p>
            <img src={game.imgUrl} alt={game.title} />
            <p>{game.shortDescription}</p>
            <p>Ano do Jogo: {game.gameYear}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default GameList;
