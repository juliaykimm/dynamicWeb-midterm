import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Home from "../container/Home";

function Header() {
  let { id } = useParams();

  return (
    <header>
      <div>
        <nav>
          <a href="/?movie=My Neighbor Totoro">My Neighbor Totoro</a>
          <a href="/?movie=Kiki's Delivery Service">Kiki's Delivery Service</a>
          <a href=" /?movie=Spirited Away">Spirited Away</a>
          <a href="/?movie=Ponyo">Ponyo</a>
          <a href="/?movie=Princess Mononoke">Princess Mononoke</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
