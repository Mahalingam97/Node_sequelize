import {movie} from "../moviedetails.js"
import "../assests/basic.css"

export default function MovieBasic(){
    return(
        <div className="movie-basic">
        <div className="poster">
          <img alt="movie" src={movie.Poster}></img>
        </div>
        <div className="movie-info">
          <div className="movie-head">
            <h1>{movie.MovieName}</h1>
            <span className="year">{movie.Year}</span>
            <span className="duration">{movie.Duration}utes</span> 
            <div className="genre">{movie.Genre}</div>
          </div>
          <div className="movie-amt">
            <span><button>Rent  &#8377;{movie.RentAmt}</button></span>
            <span><button>Buy  &#8377;{movie.BuyAmt}</button></span>
          </div>
        </div>
      </div>
    )
}