import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, NavLink, useRouteMatch, Route } from 'react-router-dom'

import MovieCard from './MovieCard'
import Stars from './Stars'

export default function Movie(props) {
  const [movie, setMovie] = useState();

  const {movies} = props
  const {url, path} = useRouteMatch()

  const { movieID } = useParams()

  const id = movieID
  // Change ^^^ that line and use a hook to obtain the :id parameter from the URL

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`) // Study this endpoint with Postman
      .then(res => {
        setMovie(res.data)
        // Study this response with a breakpoint or log statements
        // and set the response data as the 'movie' slice of state
      })
      .catch(error => {
        console.error(error);
      });
    // This effect should run every time time
    // the `id` changes... How could we do this?
  }, []);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <div className="movie-card">
      <MovieCard title={title} director={director} metascore={metascore} />
        <div>
        <h3>Actors</h3>
          <Stars stars={stars} />
        </div>
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}
