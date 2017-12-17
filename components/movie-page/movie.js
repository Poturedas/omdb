import React from "react"

export default function Movie() {
  return (
  <div className="container movie-page">
    <div className="row movie">
      <div className="poster col-sm-3">
        <img src="img/tower.jpg" alt="Обложка фильма" />
      </div>
      <div className="info col-sm-9">
        <div className="info-rating">
          <h3>The Dark Tower</h3>
          <div className="rating">
            <div className="rating-block">
              <div className="imdb-icon sprite"></div>
              <div className="score">6.0</div>
            </div>
            <div className="rating-block">
              <div className="rtms-icon sprite"></div>
              <div className="score">16%</div>
            </div>
            <div className="rating-block">
              <div className="meta-icon sprite"></div>
              <div className="score">34</div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
        <p>The last Gunslinger, Roland Deschain, has been locked in an eternal battle with Walter O"Dim, also known as the Man in Black, determined to prevent him from toppling the Dark Tower, which holds the universe together. With the fate of the worlds at stake, good and evil will collide in the ultimate battle as only Roland can defend the Tower from the Man in Black.</p>
        <small>
          <span className="genres">Action, Adventure, Fantasy</span>
          <span className="dot"> • </span>
          <span className="release-date">04-08-2017</span>
        </small>
      </div>
    </div>
  </div>
  )
}