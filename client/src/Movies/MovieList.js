import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
import MovieCard from './MovieCard'

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

  return (
    <Link to={`/movies/${id}`}>
      <div className="movie-card">
      <MovieCard title={title} director={director} metascore={metascore} />
      </div>    
    </Link>
  );
}
