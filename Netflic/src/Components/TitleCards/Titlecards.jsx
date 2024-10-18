/* eslint-disable react/prop-types */
import  { useRef, useEffect, useState } from 'react'
import './Titlecards.css'
import { Link } from 'react-router-dom'
const Titlecards = ({ title, category }) => {
  const [apiData, setApiData] = useState([])


  const cardsRef = useRef()
  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjkzMjQxZDhlNWFmYzY2YjkwY2FhMDkyNmQxMmZkNyIsIm5iZiI6MTcyOTE2NTMyNi41NDQyMTgsInN1YiI6IjY3MTBmNTJjMWI5MTJhZGQyZWRiZGRlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OnBrxrpbGcvYeBQXAYaW3mVTlpeRukZKjSCAPxcvL2E'
    }
  };


  useEffect(() => {
    if (cardsRef) {
      cardsRef.current.addEventListener('wheel', handleWheel);
      console.log("This is getting error in useeffect");
    }
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "upcoming"}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .then(response => console.log(response))
      .catch(err => console.error(err));

  }, [])
  return (
    <>
      <div className='titlecards'>
        <h2>{title ? title : "Popular on Netflix"}</h2>
        <div className='card-list' ref={cardsRef}>
          {apiData.map((cards, index) => (
            <Link to={`/player/${cards.id}`} key={index} className='card'>
              <img src={`https://image.tmdb.org/t/p/w500` + cards.backdrop_path} alt={cards.original_title} />
              <p>{cards.original_title}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Titlecards