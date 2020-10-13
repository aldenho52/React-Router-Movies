import React from 'react';
import {useHistory, Link, useRouteMatch, useParams } from 'react-router-dom'

export default function SavedList(props) {
  const { list, movies } = props
  const history = useHistory()
  const {url} = useRouteMatch()

  const {movieID} = useParams()

  const routeToHome = () => {
    history.push('/')
  }

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {
        movies.map(movie => {
          if (list.includes(movie.id)) {
            return <Link to='/movies/:movieID'><span key={movie.id} className="saved-movie">{movie.title}</span></Link>
          }
      })
    }
      <div onClick={routeToHome} className="home-button">Home</div>
    </div>
  );
}


// http://localhost:3000/movies/0