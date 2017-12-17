import React from "react"
import MovieItem from "./movie-item"


const movies = [
  {
    image: "img/life.jpg",
    title: "Life",
    description: "A team of scientists aboard the International Space Station discover a rapidly evolving life form that caused extinction on Mars and now threatens all life on Earth.",
    rating: 6.9,
    genres: ["Horror", "Sci-Fi", "Thriller"],
    releaseDate: "24-03-2017",
  },
  {
    image: "img/rachel.jpg",
    title: "My Cousin Rachel",
    description: "A young Englishman plots revenge against his late cousin's mysterious, beautiful wife, believing her responsible for his death. But his feelings become complicated as he finds himself falling under the beguiling spell of her charms.",
    rating: 6.1,
    genres: ["Drama", "Mystery", "Romance"],
    releaseDate: "09-06-2017",
  },
  {
    image: "img/shot.jpg",
    title: "Shot Caller",
    description: "A newly released prison gangster is forced by the leaders of his gang to orchestrate a major crime with a brutal rival gang on the streets of Southern California.",
    rating: 7.6,
    genres: ["Crime", "Drama", "Thriller"],
    releaseDate: "18-08-2017",
  },
  {
    image: "img/mummy.jpg",
    title: "The Mummy",
    description: "An ancient Egyptian princess is awakened from her crypt beneath the desert, bringing with her malevolence grown over millennia, and terrors that defy human comprehension.",
    rating: 5.7,
    genres: ["Action", "Adventure", "Fantasy"],
    releaseDate: "09-06-2017",
  },
  {
    image: "img/tower.jpg",
    title: "The Dark Tower",
    description: "The last Gunslinger, Roland Deschain, has been locked in an eternal battle with Walter O'Dim, also known as the Man in Black, determined to prevent him from toppling the Dark Tower, which holds the universe together. With the fate of the worlds at stake, good and evil will collide in the ultimate battle as only Roland can defend the Tower from the Man in Black.",
    rating: 5.8,
    genres: ["Action", "Adventure", "Fantasy"],
    releaseDate: "04-08-2017",
  },
  {
    image: "img/bourne.jpg",
    title: "Jason Bourne",
    description: "The CIA's most dangerous former operative is drawn out of hiding to uncover more explosive truths about his past.",
    rating: 6.7,
    genres: ["Action", "Thriller"],
    releaseDate: "27-07-2016",
  },
]

export default function MovieList() {
  return (
    <div className="container">
      <div className="row">
        {
          movies.map(function(movie) {
            return <MovieItem movie={movie} />
          })
        }
      </div>
    </div>
  )
}