import React, { useState, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Header from "../components/Header";

function Home() {
  const [SGData, setSGData] = useState(null);
  const [movie, setMovie] = useState("");
  const withSpace = movie.replace("_", " ");
  const history = useHistory();
  const [musicData, setMusicData] = useState("retro bass wave");
  const [music, setMusic] = useState("");

  useEffect(() => {
    axios
      .get(`https://ghibliapi.herokuapp.com/films?q=${withSpace}`)

      .then(function (response) {
        const SGResponseData = response.data;
        setSGData(SGResponseData);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, [movie]);

  useEffect(() => {
    axios
      .get(`https://binaryjazz.us/wp-json/genrenator/v1/genre/`)

      .then(function (response) {
        const musicResponseData = response.data;
        setMusicData(musicResponseData);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, [music]);

  useEffect(() => {
    const searchParams = history.location.search;
    const urlParams = new URLSearchParams(searchParams);
    const movie = urlParams.get("movie");
    if (movie) {
      setMovie(movie);
    }
    console.log("urlParams", urlParams);
  }, [history]);

  useEffect(() => {
    const searchParams = history.location.search;
    const urlParams = new URLSearchParams(searchParams);
    const music = urlParams.get("music");
    if (music) {
      setMusic(music);
    }
    console.log("urlParams", urlParams);
  }, [history]);

  const { description, director, title } = useMemo(() => {
    let description = "";
    let director = "";
    let title = "";

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

  const { genre } = useMemo(() => {
    let genre = "";

    if (SGData) {
      console.log("musicData", musicData);
      genre = `${musicData}`;
    }

    return {
      genre,
    };
  }, [musicData]);

  return (
    <>
      <Header />
      <header>
        <div className="bodyTextBox">
          <h1 className="Heading">STUDIO GHIBLI FILMS</h1>
          <p>NAME: {title}</p>
          <p>DESCRIPTION: {description}</p>
          <p>DIRECTED BY: {director}</p>
          <p>RANDOM GENRE OF MUSIC: {genre}</p>
        </div>
      </header>
    </>
  );
}

export default Home;
