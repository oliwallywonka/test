import { useEffect, useState } from 'react'
import { Movie, MoviesResponse } from './interfaces/movie'
import { MovieComponent } from './components/movie'


function App() {
  const URL = `https://www.omdbapi.com/?apikey=ce07379d&s=`

  const [searchQuery, setSearchQuery] = useState<string>('')
  const [movies, setMovies] = useState<Movie[]>([])
  const [isLoading, setILoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const searchMovies = async (e:string) => {
    setILoading(true)
    const response = await fetch(`${URL}${searchQuery}`)
    const data = await response.json() as MoviesResponse
    console.log(data)
    setMovies(data.Search)
    if (data.Error) setError(true)
    setILoading(false)
  }
  
  useEffect(()=> {
    //searchMovies()
  },
  [])
  return (
    <>
      {isLoading&&'...loading'}
      {error&&'...no encontrado'}
        <input 
          type="text"
          onChange={(e)=> {e.preventDefault(); searchMovies(e.target.value)}}
          
        />
      <div>{searchQuery}</div>
      {
        movies?.map(movie => (
          <MovieComponent 
            Title={movie.Title} 
            Year={movie.Year} 
            key={movie.imdbID}
            Poster={movie.Poster}
            imdbID={movie.imdbID}
          />
        ))
      }
    </>
  )
}

export default App
