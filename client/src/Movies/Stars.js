import React from 'react';

export default function Stars (props) {
    const {stars} = props

  return(
    stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))
  )
}
