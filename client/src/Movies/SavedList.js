import React from 'react';
import {useHistory, Link, useRouteMatch, useParams, Route, Switch } from 'react-router-dom'

import Movie from './Movie'

export default function SavedList(props) {
  const { list, movies, addToSavedList } = props
  const history = useHistory()
  const {url} = useRouteMatch()

  const {movieID} = useParams()

  const routeToHome = () => {
    history.push('/')
  }

  const routeToMovie = (movie) => {
    console.log(history)
    history.push(`/movies/${movie.id}`)
  }

  const link = movieID

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {
        movies.map(movie => {
          if (list.includes(movie.id)) {
               return <span onClick={evt => routeToMovie(movie)} key={movie.id} className="saved-movie">{movie.title}</span>
              
              }
        }
      )
    }
      <div onClick={routeToHome} className="home-button">Home</div>
    </div>
  );
}
