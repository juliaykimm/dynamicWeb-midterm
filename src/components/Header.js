import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Header() {
  let { id } = useParams();

  return (
    <header className="Header">
      <div>
        <nav>
          <a href="/?movie=Spirited_Away">Spirited Away</a>
          <a href="/?movie=Ponyo">Ponyo</a>
          <a href="/?movie=My_Neighbor_Totoro">My Neighbor Totoro</a>
          <a href="/?movie=Princess_Mononoke">Princess Mononoke</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
