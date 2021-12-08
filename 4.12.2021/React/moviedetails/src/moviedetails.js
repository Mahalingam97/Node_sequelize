// import './App.css';
// // import axios from 'axios';
// import React, { useEffect ,useState} from 'react';
// import "./moviedetails.css"
// import MovieBasic from "./movie/basic"
// import MovieCast from './movie/cast';
// // const baseURL="localhost:7000"
// // var id="03f11cc4-4bea-421a-af60-a1045b066d42"

// export var movie={
//   "MovieId": "03f11cc4-4bea-421a-af60-a1045b066d42",
//   "MovieName": "Venom: Let There Be Carnage",
//   "Language": "English",
//   "Year": 2021,
//   "Poster": "https://m.media-amazon.com/images/M/MV5BYTc3ZTAwYTgtMmM4ZS00MDRiLWI2Y2EtYmRiZmE0YjkzMGY1XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg",
//   "Rating": 6.3,
//   "Released": "01 Oct 2021",
//   "Duration": "97 min",
//   "Genre": "Action, Adventure, Sci-Fi",
//   "RentAmt": 150,
//   "BuyAmt": 480,
//   "Description": "Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage and escapes prison after a failed execution.",
//   "createdAt": "2021-12-05T17:23:10.000Z",
//   "updatedAt": "2021-12-05T17:23:10.000Z",
//   "movieCast": {
//       "MovieId": "03f11cc4-4bea-421a-af60-a1045b066d42",
//       "Actors": "Tom Hardy, Woody Harrelson, Michelle Williams",
//       "Producers": "Avi Arad, Matt Tolmach, Amy Pascal",
//       "Director": "Andy Serkis",
//       "Writer": "Kelly Marcel, Tom Hardy, Todd McFarlane",
//       "createdAt": "2021-12-05T17:23:11.000Z",
//       "updatedAt": "2021-12-05T17:23:11.000Z"
//   }
// }

// function Details() {  

//   return (
//     <div className="movie-detailed-page">
//       <MovieBasic />
//       <MovieCast />
//     </div>
    
//   );
// }

// export default Details;

import './App.css';
import axios from 'axios';
import React, { useEffect ,useState} from 'react';
import "./moviedetails.css"
import MovieBasic from "./movie/basic"
import MovieCast from './movie/cast';
// import movieCast from '../../../Node_sequelize/models/movieCast';


function Details() {  
  const [movie,setmovie]= useState([])
let check=[];
  useEffect(()=>{
    axios.get("http://localhost:6000/movie/findById/?id=03f11cc4-4bea-421a-af60-a1045b066d42")
    .then((result)=>{ 
      // console.log(result.data); 
      setmovie(result.data)
    })
  },[])
 // console.log(movie.movieCast)
  return (
    <div className="movie-detailed-page"> 
      <MovieBasic movie={movie}/>
      {/* <MovieCast movie={movie} /> */}
      {/* {MovieCast(movie)} */}
    </div>
    
  );
}

export default Details;
//  var id="03f11cc4-4bea-421a-af60-a1045b066d42"
//`${baseURL}/movie/findById/?id=${id}`

  // "MovieId": "03f11cc4-4bea-421a-af60-a1045b066d42",
  // "MovieName": "Venom: Let There Be Carnage",
  // "Language": "English",
  // "Year": 2021,
  // "Poster": "https://m.media-amazon.com/images/M/MV5BYTc3ZTAwYTgtMmM4ZS00MDRiLWI2Y2EtYmRiZmE0YjkzMGY1XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg",
  // "Rating": 6.3,
  // "Released": "01 Oct 2021",
  // "Duration": "97 min",
  // "Genre": "Action, Adventure, Sci-Fi",
  // "RentAmt": 150,
  // "BuyAmt": 480,
  // "Description": "Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage and escapes prison after a failed execution.",
  // "createdAt": "2021-12-05T17:23:10.000Z",
  // "updatedAt": "2021-12-05T17:23:10.000Z",
  // "movieCast": {
  //     "MovieId": "03f11cc4-4bea-421a-af60-a1045b066d42",
  //     "Actors": "Tom Hardy, Woody Harrelson, Michelle Williams",
  //     "Producers": "Avi Arad, Matt Tolmach, Amy Pascal",
  //     "Director": "Andy Serkis",
  //     "Writer": "Kelly Marcel, Tom Hardy, Todd McFarlane",
  //     "createdAt": "2021-12-05T17:23:11.000Z",
  //     "updatedAt": "2021-12-05T17:23:11.000Z"




