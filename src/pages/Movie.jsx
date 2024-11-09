import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovieData(data));
  }, [id]);

  if (!movieData) return <p>Loading...</p>;

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <h1>{movieData.title}</h1>
      <p>Time: {movieData.time} mins</p>
      <div>
        {movieData.genres.map((genre, index) => (
          <span key={index}>{genre} </span>
        ))}
      </div>
    </div>
  );
}

export default Movie;

