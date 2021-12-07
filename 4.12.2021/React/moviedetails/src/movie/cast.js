import {movie} from "../moviedetails.js"
import "../assests/cast.css"
export default function MovieCast(){
    return(
        <div className="movie-cast-and-info">
        <p className="plot">{movie.Description}</p>
        <hr/>
        <p>CAST AND CREDITS</p>
        <div className="cast-detail">
          <div className="block">
            <p>Actors</p>
            <div><p>{movie.movieCast.Actors}</p></div>
          </div>
          <div className="block">
            <p>Producer</p>
            <div><p>{movie.movieCast.Producers}</p></div>
          </div>
          <div className="block">
            <p>Director</p>
            <div><p>{movie.movieCast.Director}</p></div>
          </div>
          <div className="block">
            <p>Writer</p>
            <div><p>{movie.movieCast.Writer}</p></div>
          </div>
        </div>
        <hr/>
        <p>ADDITIONAL INFORMATION</p>
        <div className="add-info">
          <div className="block">
            <p>Language</p>
            <p>{movie.Language}</p>
          </div>
          <div className="block">
            <p>Rating</p>
            <p>{movie.Rating}</p>
          </div>
          <div className="block">
            <p>Released on</p>
            <p>{movie.Released}</p>
          </div>
        </div>
      </div>
    )
}