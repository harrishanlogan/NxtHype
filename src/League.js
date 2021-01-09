import React, { useState, useEffect } from "react";
import "./App.css";

function League() {
  useEffect(() => {
    fetchChamps();
  }, []);

  const fetchChamps = async () => {
    const url =
      "http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json";
    const data = await fetch(url);
    const items = await data.json();
    var obj = items.data;
    var champ = Object.keys(obj)[
      Math.floor(Math.random() * Object.keys(obj).length)
    ];
    var i;
    for (i = 0; i < Object.keys(obj).length; ) {
      if (JSON.stringify(Object.keys(obj)[i]) === JSON.stringify(champ)) {
        console.log(Object.values(obj)[i]);
        break;
      } else {
        i++;
      }
    }
    //   if (
    //     JSON.stringify(Object.keys(obj).length) ===
    //     JSON.stringify(Object.keys(obj)[i])
    //   ) {
    //     console.log(i);
    //   } else {
    //     i = i + 1;
    //   }
    // }
  };
  return <div>hi</div>;
}

export default League;
