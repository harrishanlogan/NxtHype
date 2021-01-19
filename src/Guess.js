import "./App.css";
import React, { useState, useEffect } from "react";
import greencheck from "./images/greencheck.png";

function Guess({ champName }) {
  const [SearchTerm, setSearchTerm] = useState("");
  const [checkmark, setCheckmark] = useState(false);

  useEffect(() => {
    handleName();
  }, [SearchTerm]);

  const handleName = () => {
    if (SearchTerm && SearchTerm.toLowerCase() === champName.toLowerCase()) {
      setCheckmark(true);
    }
  };
  return (
    <div>
      <input
        type="text"
        className="searchcontainer"
        spellcheck="false"
        placeholder="Guess the Champ..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      {checkmark ? <img className="checkstyle" src={greencheck} /> : null}
    </div>
  );
}

export default Guess;
