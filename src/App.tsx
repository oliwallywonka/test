import { useEffect, useState } from 'react'
import { Movie, MoviesResponse } from './interfaces/movie'
import { MovieComponent } from './components/movie'


function App() {
  const URL = `https://www.omdbapi.com/?apikey=ce07379d`

  const [searchQuery, setSearchQuery] = useState<string>("")
  const [movies, setMovies] = useState<Movie[]>([])
  const [movie, setMovie] = useState<Movie>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const debounce = (fn: Function, ms = 300) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
  };

  const searchMovies = async () => {
    setIsLoading(true)
    setError(false)
    const response = await fetch(`${URL}&s=${searchQuery}`)
    const data = await response.json() as MoviesResponse
    console.log(data)
    setMovies(data.Search)
    if (data.Error) setError(true)
    setIsLoading(false)
  }

  const getDetails =  async(imdbId: string) => {
    const response = await fetch(`${URL}&i=${imdbId}`)
      const data = await response.json() as Movie
      console.log(data)
      setMovie(data)
      setIsLoading(false)
  }

  return (
    <>
      {isLoading&&'...loading'}
      {error&&'...no encontrado'}
        <input 
          type="text"
          onChange={(e)=> {setSearchQuery(e.target.value); searchMovies()}}
          
        />
      <div>{searchQuery}</div>
      {
        movies?.map(movie => (
          <div
            onClick={() => getDetails}
            key={movie.imdbID}
          >

            <MovieComponent 
              Title={movie.Title} 
              Year={movie.Year} 
              Poster={movie.Poster}
              imdbID={movie.imdbID}
            />
          </div>
        ))
      }
    </>
  )
}

export default App
