import { MovieList } from './MovieList.jsx'
import { MovieNotFound } from './MovieNotFound.jsx'

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <MovieList movies={movies} />
      : <MovieNotFound />
  )
}
