import React from "react"
import Head from "./head"
import Navbar from "./navbar"
import MovieList from "./movie-list"
import Pagination from "./pagination"
import Footer from "./footer"

export default function HomePage() {
	return (
    <div>
      <Head />
      <Navbar />
      <MovieList />
      <Pagination />
      <Footer />
    </div>
  )
}