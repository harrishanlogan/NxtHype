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
      <div className="searchcontainer">
        <input
          type="text"
          placeholder="Guess the Champ..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      {checkmark ? <img className="checkstyle" src={greencheck} /> : null}
    </div>
  );
}

export default Guess;
