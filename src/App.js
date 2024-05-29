import { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import Header from './components/Header';
// import Search from './components/Search';
import MovieHolder from './components/MovieHolder';
import Alert from './components/Alert';
import localMovies from './movies';
import Footer from './components/Footer';

const App = () => {
  const API_KEY = 'af5a4628';
  const API_ID ='tt3896198'
  const API_URL = `http://www.omdbapi.com/?i=${API_ID}&apikey=${API_KEY}`;

  let [movie, setMovie] = useState([]);
  let [isMoviePresent, setIsMoviePresent] = useState(false);
  let [searchVal, setSearchVal] = useState('');
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState('');

  let searchMovie = async(title) => {
    try{
      const res = await fetch(`${API_URL}&s=${title}`);
      if(!res.ok){
        throw new Error('Something went wrong');
      }
      const data = await res.json();
      console.log(data.Search)
      setIsMoviePresent(true);
      setMovie(data.Search);
      setIsLoading(false);
    } catch(err) {
      setIsMoviePresent(false);
      setIsLoading(false);
      setError(err.message);
    }
  }

  useEffect(() => {searchMovie('batman')}, []);

  return (
    <div className='bg-stone-800 min-h-[100vh] h-fit'>
      <Header />
      <main className='pt-3 sm:pt-4 px-2 sm:px-20 md:px-32'>
        <div className="mt-6 mb-10 sm:mb-16 pr-4 sm:pr-6 mx-auto flex items-center justify-center w-fit rounded-2xl sm:rounded-3xl bg-stone-900">
          <input type="text" placeholder='Search Movie' value={searchVal} onChange={(e) => setSearchVal(e.target.value)} className='bg-stone-900 text-slate-400 placeholder:text-slate-500 placeholder:font-semibold placeholder:text-sm sm:placeholder:text-base text-sm sm:text-base md:text-lg p-2 sm:p-3 min-w-[200px] w-[50vw] sm:w-[30vw] inline-block outline-none caret-slate-500 rounded-2xl sm:rounded-3xl'/>
          {searchVal && <i className="text-slate-500 text-lg sm:text-xl font-bold cursor-pointer transform active:scale-90" onClick={(e) => searchMovie(searchVal)}><FaSearch /></i>}
          {!searchVal && <i className="text-slate-500 text-lg sm:text-xl font-bold cursor-pointer"><FaSearch /></i>}
        </div>
        {isLoading && <Alert info = 'loading...' />}
        {error && <Alert info={error} fromTextColor='from-red-600' />}
        {isMoviePresent && <MovieHolder moviesObj={movie} /> }
        {!isMoviePresent && <MovieHolder moviesObj={localMovies} />}
      </main>
      <Footer />
    </div>
  )
}


export default App;
