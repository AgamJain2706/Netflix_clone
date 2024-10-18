/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useParams, useNavigate } from 'react-router-dom'
const Player = () => {
  const { id } = useParams();
  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: "",
    typeof: ""
  })
  const navigate = useNavigate();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjkzMjQxZDhlNWFmYzY2YjkwY2FhMDkyNmQxMmZkNyIsIm5iZiI6MTcyOTIyOTcwMC45MTEwNDksInN1YiI6IjY3MTBmNTJjMWI5MTJhZGQyZWRiZGRlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sMH3b3vZTD02szTUYqpKQb8emghvq7A73kv6uu5qLT4'
    }
  };
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results[0]))
      .catch(err => console.error(err));

  }, [])


  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="back_arrow_icon" onClick={() => {
        navigate(-2)
      }} />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen>
      </iframe>
      <div className='player-info'>
        <p>Published Date : {apiData.published_at.slice(0, 10)} <br /> </p>
        <p>Name : {apiData.name}</p>
        <p>Type : {apiData.typeof}</p>
      </div>
    </div>
  )
}

export default Player