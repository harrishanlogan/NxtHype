import React, { useState, useEffect } from "react";
import "./App.css";
import Guess from "./Guess";

function League() {
  useEffect(() => {
    fetchChamps();
  }, []);

  const [Icon, setIcon] = useState(null);

  const fetchChamps = async () => {
    const url =
      "http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json";
    const data = await fetch(url);
    const items = await data.json();
    var obj = items.data;
    var champ = Object.keys(obj)[
      Math.floor(Math.random() * Object.keys(obj).length)
    ];
    setIcon(champ);
  };
  return (
    <div>
      <Guess champName={Icon} />
      <div>
        <img
          className="banner-img"
          src={
            Icon
              ? "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
                Icon +
                "_0.jpg"
              : ""
          }
        />
      </div>
      <img
        className="spawnstyle"
        src={
          Icon
            ? "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
              Icon +
              "_0.jpg"
            : ""
        }
      />
    </div>
  );
}

export default League;
