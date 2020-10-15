import React from "react";
import { useParams } from "react-router-dom";
import SGdata from "../container/SGdata";

function Header() {
  let { id } = useParams();

  const SGData = SGdata.find((SGdata) => SGdata.id === id);
  return (
    <header>
      <div>
        <nav>
          <a href="">My Neighbor Totoro</a>
          <a href="">Kiki's Delivery Service</a>
          <a href="">Spirited Away</a>
          <a href="/?title=Ponyo">Ponyo</a>
          <a href="">Princess Mononoke</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
