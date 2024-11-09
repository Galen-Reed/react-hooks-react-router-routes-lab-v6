import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {

  const [actorData, setActorData] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/actors')
      .then((response) => response.json())
      .then((data) => setActorData(data));
  }, [])

  return (
    <>
      <header>
        {<NavBar />}
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorData.map((actor, index) => (
          <article key={index}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, idx) => (
              <li key={idx}>{movie}</li>
            ))}
          </ul>
        </article>
        ))}
      </main>
    </>
  );
};

export default Actors;
