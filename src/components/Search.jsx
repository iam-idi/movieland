// import { useState, useEffect } from "react";

// const API_KEY = '23456790cuy';
// const API_URL = `https://omdb-api.com?api-key=${API_KEY}`;


// const Search = () => {
//   let [movie, setMovie] = useState([]);
//   let [searchVal, setSearchVal] = useState('');

//   let searchMovie = async(title) => {
//     // const res = await fetch(`${API_URL}&s${title}`);
//     // const data = await res.json();
//     // setMovie(data.search);
//   }

//   useEffect(() => {searchMovie('batman')}, []);

//   return (
//     <div className="my-6 mx-auto flex items-center justify-cente w-fit rounded-2xl sm:rounded-3xl bg-stone-900 pr-2">
//     <input type="text" placeholder='Search Movie' value={searchVal} onChange={(e) => setSearchVal(e.target.value)} className='bg-stone-900 text-slate-400 placeholder:text-slate-500 placeholder:font-semibold placeholder:text-sm sm:placeholder:text-base text-sm sm:text-base md:text-lg p-2 sm:p-3 w-[50vw] sm:w-[30vw] inline-block outline-none caret-slate-500 rounded-2xl sm:rounded-3xl'/>
//     <i className="text-slate-500 text-xs sm:text-sm font-bold cursor-pointer border-2 border-slate-500 p-1 rounded-xl transform active:scale-90" onClick={(e) => searchMovie(searchVal)}>SEARCH</i>
//     </div>
//   )
// }

// export default Search;
