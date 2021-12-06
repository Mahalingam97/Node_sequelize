import './App.css';
import axios from 'axios';
import React, { useEffect ,useState} from 'react';

const baseURL="localhost:6000/movie/"
var id="03f11cc4-4bea-421a-af60-a1045b066d42"
function Details() {
 const [movie,setMovie]=useState([])
 useEffect(() => {
  axios.get(`http://localhost:6000/movie/findById?id=${id}`).then((response) => {
    setMovie(response.data);console.log(response.data)
    console.log(movie)
  }).catch(error => {
    console.log(error);
  });
}, []);
  
  return (
    <div className="movie-detailed-page">
      <img alt="movie-image" src={movie.Poster}></img>
    </div>
  );
}

export default Details;
