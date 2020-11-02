  
import React from 'react'
import {Card} from 'react-bootstrap'
import './MovieCard.css'
import StarRatingComponent from 'react-star-rating-component'


const MovieCard=({title, posterUrl, description, rate} ) =>{

    return(
        <div >
             <Card className="card">
                <Card.Body className='movieCard'>
                    <Card.Img className="img" variant="top" src={posterUrl} />
                    
                    <StarRatingComponent name="rate1" starCount={5} value={rate} className='stars' />
                    <Card.Title className="title" >{title}</Card.Title>
                    <Card.Text>
                        {description}
                            </Card.Text> 
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard