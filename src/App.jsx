import './App.css'

import { Movies } from './components'
import { useMovies, useSearch } from './hooks'

export function App () {
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search })

  const submitSearchForm = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const searchChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
  }

  return (
    <div className='page'>
      <header>
        <h1>Movie Search Engine</h1>
        <form className='form' onSubmit={submitSearchForm}>
          <input
            style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }}
            type='text'
            placeholder='Avengers, Black Phanter, Saw'
            value={search}
            onChange={searchChange}
          />
          <button type='submit'>Search</button>
        </form>
      </header>
      <main>
        {
          loading ? <p>Loading...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}
