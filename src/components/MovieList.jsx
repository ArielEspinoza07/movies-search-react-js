export function MovieList ({ movies }) {
  return (
    <ul className='movies'>
      {
                movies.map(movie => (
                  <li key={movie.id} className='movie'>
                    <h3>{movie.title}</h3>
                    <p>{movie.year}</p>
                    <img src={movie.image} alt={movie.title} />
                  </li>
                ))
            }
    </ul>
  )
}
