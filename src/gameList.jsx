import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const GameList = () => {
  const { listId } = useParams();
  const location = useLocation();
  const [games, setGames] = useState([]);

  useEffect(() => {
    let apiUrl = 'https://dslist-rw1h.onrender.com/';

    if (location.pathname.includes('/lists/')) {
      apiUrl = `https://dslist-rw1h.onrender.com${location.pathname}`;
    }

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setGames(data));
  }, [location.pathname]);

  return (
    <div>
      <h2>Lista de Jogos</h2>
      <ul>
        {games.map(game => (
          <li key={game.id}>
            <p>{game.title}</p>
            <img src={game.imgUrl} alt={game.title} />
            <p>{game.shortDescription}</p>
            <p>Ano do Jogo: {game.gameYear}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
