import React from "react"

export default function Navbar() {
  return (
    <div className="container navigation">
      <ul className="nav navbar-nav">
        <li role="presentation"><a href="#">Популярное</a></li>
        <li role="presentation"><a href="#">Сейчас в кино</a></li>
      </ul>
    </div>
  )
}