import React, { useState, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Header from "../components/Header";

function Home() {
  const [SGData, setSGData] = useState(null);
  const [movie, setMovie] = useState("Ponyo");
  const withSpace = movie.replace("_", " ");
  const history = useHistory();
  useEffect(() => {
    axios
      .get(`https://ghibliapi.herokuapp.com/films?q=${withSpace}`)

      .then(function (response) {
        // const SGResponseData = response.data;
        setSGData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, [movie]);

  useEffect(() => {
    const searchParams = history.location.search;
    const urlParams = new URLSearchParams(searchParams);
    const tempMovie = urlParams.get("movie");
    if (tempMovie) {
      setMovie(tempMovie);
    }
    console.log("urlParams", urlParams);
  }, [history]);

  const { description, director, title } = useMemo(() => {
    let description = "";
    let director = "";
    let title = "";
    console.log("SGData", SGData);

    if (SGData) {
      description = `${SGData[0].description}`;
      director = `${SGData[0].director}`;
      title = `${SGData[0].title}`;
    }

    return {
      description,
      director,
      title,
    };
  }, [SGData]);

  return (
    <>
      <Header />
      <header>
        <div>
          <h1>STUDIO GHIBLI FILMS</h1>
          <p>name: {title}</p>
          <p>description: {description}</p>
          <p>directed by: {director}</p>
        </div>
      </header>
    </>
  );
}

export default Home;
