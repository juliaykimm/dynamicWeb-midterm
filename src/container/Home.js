import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SGdata from "./SGdata";
import Header from "../components/Header";
const NounDataKey = `1a87155ce08a419caef43fe86e7b400d`;

function Home() {
  let { id } = useParams();

  const SGData = SGdata.find((title) => title.id === id);
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
    <>
      <Header />
      <div>
        <h1>STUDIO GHIBLI FILMS</h1>
      </div>

      {/* <article>
        {SGData.title.map((movie, i) => {
          switch (article.type) {
            case "p":
              return <p key={i}>{article.data}</p>;
            case "h2":
              return <h2 key={i}>{article.data}</h2>;
            case "h3":
              return <h3 key={i}>{article.data}</h3>;
            default:
              return null;
          }
        })}
      </article> */}
    </>
  );
}

export default Home;
