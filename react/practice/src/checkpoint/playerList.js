import React from "react";
import "./player.css";
import Player2 from "./player";

function Player() {
  const players = [
    {
      name: "Messi",
      team: "Inter Miami",
      nationality: "Argentina",
      jerserNumber: 10,
      age: 34,
      image:
        "https://remezcla.com/wp-content/uploads/2023/05/Lionel-Messi-PSG-Sports-1424x1068.jpg",
    },
    {
      name: "Ronaldo",
      team: "Al Nassr",
      nationality: "Portugal",
      jerserNumber: 7,
      age: 38,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
    },
    {
      name: "Messi",
      team: "Inter Miami",
      nationality: "Argentina",
      jerserNumber: 10,
      age: 34,
      image:
        "https://remezcla.com/wp-content/uploads/2023/05/Lionel-Messi-PSG-Sports-1424x1068.jpg",
    },
    {
      name: "Ronaldo",
      team: "Al Nassr",
      nationality: "Portugal",
      jerserNumber: 7,
      age: 38,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
    },
  ];

  return (
    <div className="cards">
      {players.map((player, index) => (
        <Player2
          name={player.name}
          team={player.team}
          nationality={player.nationality}
          jerseyNumber={player.jerserNumber}
          age={player.age}
          image={player.image}
        />
      ))}
    </div>
  );
}

export default Player;
