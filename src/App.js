import React, { useState } from "react";
import "./App.css";
import Search from "./Components/Search";
import Rating from "./Components/Rating";
import AddMovie from "./Components/AddMovie";
import MovieList from "./Components/MovieList";

const MovieInfos = [
  {
    title: "Borat Subsequent Moviefilm",
    rate: 3,
    description:
      "Follow-up film to the 2006 comedy centering on the real-life adventures of a fictional Kazakh television journalist named Borat.",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTg4NDgxMmEtZWI1ZC00MDg3LTgyMDEtNTgwODU2YTVhN2RmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpgnp",
    video: `HOwaypo3jC4&ab`,
  },
  {
    title: "The Trial of the Chicago 7",
    rate: 4,
    description:
      "The story of 7 people on trial stemming from various charges surrounding the uprising at the 1968 Democratic National Convention in Chicago, Illinois.",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BYjYzOGE1MjUtODgyMy00ZDAxLTljYTgtNzk0Njg2YWQwMTZhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    video: `FVb6EdKDBfU&ab`,
  },
  {
    title: "Aquaman",
    rate: 3,
    description:
      "Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    video: `WDkg3h8PCVU&ab`,
  },
  {
    title: "The Wolf of Wall Street",
    rate: 4,
    description:
      "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
    video: `iszwuX1AK6A&ab`,
  },
  {
    title: "Joker",
    rate: 4,
    description:
      "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime",
    posterUrl:
      "https://img6.cdn.cinoche.com/images/2410039474f50c57115d6e6f97302965.jpg",
    video: `zAGVQLHvwOY`,
  },
  {
    title: "The GodFather",
    rate: 5,
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR107,0,630,1200_AL_.jpg",
    video:`sY1S34973zA`,
  },
  {
    title: "The GodFather 2",
    rate: 5,
    description:
      "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    posterUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8Hn_NlQp2MC1X_kQd49MHo4ooqUkpYwequA&usqp=CAU",
    video: `9O1Iy9od7-A`,
  },
  {
    title: "The GodFather 3",
    rate: 4,
    description:
      "In the midst of trying to legitimize his business dealings in New York City and Italy in 1979, aging Mafia Don Michael Corleone seeks to avow for his sins.",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BNTc1YjhiNzktMjEyNS00YmNhLWExYjItZDhkNWJjZjYxOWZiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    video: `z8h3LVb8cl8`,
  },
  {
    title: "The irish Man",
    rate: 4,
    description:
      "An old man recalls his time painting houses for his friend, Jimmy Hoffa, through the 1950-70s.",
    posterUrl:
      "https://fr.web.img5.acsta.net/pictures/19/09/18/09/17/1349272.jpg",
    video: `sY1S34973zA`,
  },
  {
    title: "The Gentlemen",
    rate: 4,
    description:
      "An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTlkMmVmYjktYTc2NC00ZGZjLWEyOWUtMjc2MDMwMjQwOTA5XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    video: `Ify9S7hj480&ab`,
  },
  {
    title: "Police Academy 3: Back in Training",
    rate: 5,
    description:
      "The alumni of Commandant Lassard's Police Academy (1984) return to the school to train new recruits and prevent its closure.",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BNWM0NGQ2ZTctZDNiZi00MzlmLTlhODAtMWQ5Y2Q0YTFjOTcwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
    video: `iewE-93HglI&ab`,
  },
];

const App = () => {
  // searching movies by title
  const [input, setInput] = useState("");
  //searching movies by Rating
  const [rating, setRating] = useState("");
  //movie list
  const [movies, setMovies] = useState(MovieInfos);

  return (
    <div className="App">
      <div className="searchAdd">
        <Search setInput={setInput} />
      <AddMovie setMovies={setMovies} movies={movies} />
      </div>
      
      <Rating setRating={setRating} />
      
      <MovieList className="ml"
        movies={movies.filter(
          (searchMovie) =>
            searchMovie.title
              .toLowerCase()
              .includes(input.toLowerCase().trim()) &&
            searchMovie.rate >= rating
        )}
      />
      
    </div>
  );
};

export default App;