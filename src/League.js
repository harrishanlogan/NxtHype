import React, { useState, useEffect } from "react";
import "./App.css";

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

    // var i;
    // for (i = 0; i < Object.keys(obj).length; ) {
    //   if (JSON.stringify(Object.keys(obj)[i]) === JSON.stringify(champ)) {
    //     console.log(Object.values(obj)[i]);
    //     break;
    //   } else {   []
    //     i++;
    //   }
    // }
  };
  return (
    <div>
      <h1 className="fade-in">What Champion is this?</h1>
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
