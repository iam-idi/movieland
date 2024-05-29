import React, { useState } from 'react'

const MovieCard = ({movieDetails}) => {
  let [isOnHover, setIsOnHover] = useState(false);
  return (
    <div className={`${isOnHover ? 'opacity-100' : 'opacity-90'} relative bg-stone-900 text-slate-400 font-bold text-sm sm:text-base min-w-[200px] w-[16vw] rounded-t-lg`} onMouseOut={() => { setIsOnHover(false) }} onMouseOver={() => { setIsOnHover(true) }}>
      <div className='w-full h-[180px] sm:h-[220px] rounded-t-lg'>
        <p className={`${isOnHover ? 'block' : 'hidden'} absolute top-3 left-2`}>{movieDetails.Year}</p>
        <img src={movieDetails.Poster} alt={movieDetails.Title} className='w-full h-full rounded-t-lg'/>
      </div>
      <div className='p-2 bg-stone-900 w-full h-[70px] sm:h-[100px]'>
        <h2 className='text-xs sm:text-sm mb-1 sm:mb-4 text-slate-500'>{movieDetails.Type.toUpperCase()}</h2>
        <h2 className='text-xs sm:text-sm'>{movieDetails.Title}</h2>
      </div>
    </div>
  )
}

export default MovieCard;
