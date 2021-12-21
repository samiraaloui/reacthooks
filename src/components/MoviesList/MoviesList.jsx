import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MoviseList.css'
function MoviesList({MoviesListData , titleSearch , ratingSearch}) {
    console.log(MoviesListData)
    return (
        <div className="my-list">
          { MoviesListData
            .filter(movie=>movie.title.toLowerCase().includes(titleSearch) && movie.rating>= ratingSearch)
           .map((movie , index)=> <MovieCard movie={movie} key={index} />)}
        </div>
    )
}

export default MoviesList
