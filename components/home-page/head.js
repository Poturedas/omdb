import React from "react"

export default function Head() {
	return (
    <header>
      <nav className="container navbar">
        <div className="logo">
          <a className="navbar-brand" href="index.html"><img src="img/logo.svg" alt="OMDB" /></a>
        </div>
        <form className="navbar-form">
          <div className="inner-addon">
            <i className="glyphicon glyphicon-search"></i>
            <input className="form-control" type="search" placeholder="Поиск" />
          </div>
        </form>
      </nav>
    </header>
  )
}
