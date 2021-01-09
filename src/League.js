import React, { useState, useEffect } from "react";
import "./App.css";

function League() {
  useEffect(() => {
    fetchChamps();
  }, []);

  const [items, setItems] = useState([]);

  const fetchChamps = async () => {
    const url =
      "http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json";
    const data = await fetch(url);
    const items = await data.json();
    var obj = items.data;
    console.log(Object.keys(obj)[Math.floor(Math.random() * 135)]);
  };
  return <div>hi</div>;
}

export default League;
