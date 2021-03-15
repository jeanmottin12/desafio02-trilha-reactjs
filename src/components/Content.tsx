import { MovieCard } from './MovieCard';

interface MovieProps {
  movies: [
    {
      Title: string;
      Poster: string;
      Ratings: Array<{
        Source: string;
        Value: string;
      }>;
      Runtime: string;
    }
  ];
  selectedGenre: {
    title: string;
  }
}

export function Content(props: MovieProps) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {props.selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {props.movies.map((movie, index) => (
            <MovieCard key={index} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}