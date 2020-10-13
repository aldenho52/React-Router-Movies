import React from 'react';
import {useHistory} from 'react-router-dom'

export default function SavedList(props) {
  const { list, movies } = props
  const history = useHistory()

  const routeToHome = () => {
    history.push('/')
  }

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {
        movies.map(movie => {
          if (list.includes(movie.id)) {
            return <span key={movie.id} className="saved-movie">{movie.title}</span>
          }
      })
    }
      <div onClick={routeToHome} className="home-button">Home</div>
    </div>
  );
}


