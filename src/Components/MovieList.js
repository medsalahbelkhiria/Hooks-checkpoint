import React from 'react'
import MovieCard from './MovieCard'

  const MovieList = ({movies} )=>{

    return (
      <div >
        
            <div  >
            <h1 style={{color :'white', margin:'10px'}}> Movies List </h1>
            </div>
        
            <div className="row">
            {movies.map((MovieInfos,index)=>{
                return (
                <MovieCard key={index} title={MovieInfos.title} posterUrl={MovieInfos.posterUrl} description={MovieInfos.description} rate={MovieInfos.rate} />
                )
            })}
        </div>
        
        </div>
    )
  }

  export default MovieList