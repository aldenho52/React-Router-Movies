import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom'

export default function MovieList(props) {
  const { movies } = props

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore, id } = props.movie;
  const {url} = useRouteMatch()

  return (
    <Link to={`${url}/${id}`}>
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>    
    </Link>
  );
}
