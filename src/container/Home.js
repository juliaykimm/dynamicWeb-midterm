import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Header from "../components/Header";

function Home() {
  const [SGData, setSGData] = useState(null);
  const [movie, setMovie] = useState("Ponyo");

  useEffect(() => {
    axios
      .get(`https://ghibliapi.herokuapp.com/films?q=${movie}`)
      .then(function (response) {
        const SGResponseData = response.data;
        setSGData(SGResponseData);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, [movie]);

  const { description, director } = useMemo(() => {
    let description = "";
    let director = "";
    let title = "";
    console.log("SGData", SGData);

    if (SGData) {
      description = `${SGData.description}`;
      director = `${SGData.director}`;
      title = `${SGData.title}`;
    }

    return {
      description,
      director,
    };
  }, [SGData]);

  return (
    <>
      <Header />
      <header>
        <div>
          <h1>STUDIO GHIBLI FILMS</h1>
          <p>name: {movie}</p>
          <p>description: {description}</p>
          <p>directed by: {director}</p>
        </div>
      </header>
    </>
  );
}

export default Home;
