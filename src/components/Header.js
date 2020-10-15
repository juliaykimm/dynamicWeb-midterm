import React from "react";
import { useParams } from "react-router-dom";
import SGdata from "../container/SGdata";

function Header() {
  let { id } = useParams();

  const SGData = SGdata.find((SGdata) => SGdata.id === id);
  return (
    <header>
      <div>
        <h1>Studio Ghibli Films</h1>
        <p>{SGData.title}</p>
      </div>
    </header>
  );
}

export default Header;
