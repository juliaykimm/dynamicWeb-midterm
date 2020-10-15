import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import SGdata from "./SGdata";
import Header from "../components/Header";
const NounDataKey = `1a87155ce08a419caef43fe86e7b400d`;

function Home() {
  // const [NounData, setNounData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`http://api.thenounproject.com`)
  //     .then(function (response) {
  //       const NounResponseData = response.data;
  //       setNounData(NounResponseData);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div>
      <h1>STUDIO GHIBLI FILMS</h1>
      {/* <h2>{NounData}</h2> */}
    </div>
  );
}

export default Home;
