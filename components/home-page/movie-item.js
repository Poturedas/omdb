import React from "react"

export default function MovieItem(props) {
  const movie = props.movie
  return (
    <div className="col-sm-6">
      <a className="movie-item">
        <div className="poster">
          <img src={movie.image} alt="Обложка фильма" />
        </div>
        <div className="info">
          <div>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <div className="rating">{movie.rating}</div>
          </div>
          <small>
            <span className="genres">{movie.genres.join(", ")}</span>
            <span className="dot"> • </span>
            <span className="release-date">{movie.releaseDate}</span>
          </small>
        </div>
      </a>
    </div>
  )
}