import React from "react"

export default function Navbar() {
  return (
    <header>
      <div className="movie-page">
        <div className="container">
          <nav className="navbar navbar-default">
            <button type="button" className="btn btn-default nav-btn-left">
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>Назад
            </button>
            <div className="btn-group" role="navigation">
              <button type="button" className="btn btn-default nav-btn-right">
                <span className="glyphicon glyphicon-menu-left" aria-hidden="true" />
              </button>
              <button type="button" className="btn btn-default nav-btn-right">
                <span className="glyphicon glyphicon-menu-right" aria-hidden="true" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}