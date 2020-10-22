import React from "react";

function Header() {
  return (
    <header className="Header">
      <div>
        <nav>
          <a href="/?movie=Spirited_Away">Spirited Away</a>
          <a href="/?movie=Ponyo">Ponyo</a>
          <a href="/?movie=My_Neighbor_Totoro">My Neighbor Totoro</a>
          <a href="/?movie=Princess_Mononoke">Princess Mononoke</a>
          <a href="/?movie=Pom_Poko">Pom Poko</a>
          <a href="/?movie=Arrietty">Arrietty</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
