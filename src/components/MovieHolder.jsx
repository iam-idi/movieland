import MovieCard from "./MovieCard";

const MovieHolder = ({moviesObj}) => {
  return (
    <section className="flex justify-center items-center gap-2 md:gap-3 flex-wrap mt-4">
      { moviesObj && moviesObj.map((item, index) => (<MovieCard movieDetails={item} key={index} />)) }
    </section>
  )
}

export default MovieHolder;
