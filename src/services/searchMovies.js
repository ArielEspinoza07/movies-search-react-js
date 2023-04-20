export const searchMovies = async ({ search }) => {
  const apiKey = import.meta.env.VITE_API_KEY

  if (search === '') return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${search}&type=movie`)
    const json = await response.json()

    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster
    }))
  } catch (e) {
    throw new Error('Error searching movies')
  }
}
