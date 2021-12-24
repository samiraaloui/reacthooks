import React ,{useState, useEffect} from 'react'
import { useHistory , Link } from 'react-router-dom'
import MoviesData from '../MoviesData/MoviesData'
import {Button} from 'react-bootstrap'
const MovieDetails = ({match}) => {
    const[movie , setMovie]=useState ({})
    useEffect(() => {
       setMovie(MoviesData.find((movie)=>movie.id === match.params.id))
    }, [match.params.id])

    let history = useHistory()
    console.log(movie)
    return (
        <div className='App'>
            <h1>{movie.title} </h1>
            <iframe
             width="560"
              height="315"
               src= {movie.tralier}
               title="YouTube video player" 
               frameBorder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
               allowFullScreen>
               </iframe>
               <h3>{movie.description}</h3>
               
               <Button onClick={()=>history.push('/')}>Back to home</Button>
              
        </div>
    )
}

export default MovieDetails
