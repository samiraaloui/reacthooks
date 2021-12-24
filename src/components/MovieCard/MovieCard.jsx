import React from 'react'
import {Button , Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
function MovieCard({movie}) {
    return (
        <div>
            <Card style={{ width: '15rem' , margin :"12px" , color:'#263B64' }}>
                 <img variant="top" src={movie.poster} style={{width : "15rem" , height : "18rem" }} alt="logo" />
                 <Card.Body>
                <h5>{movie.title}</h5>
                <h6>
                {movie.description}
                  </h6>
                 
                </Card.Body>
                <h3>{"⭐".repeat(movie.rating)}</h3>
                <Link to={`/details/${movie.id}`}>
                <Button> See tralier</Button>
                </Link>
            </Card> 
            
        </div>
    )
}

export default MovieCard
