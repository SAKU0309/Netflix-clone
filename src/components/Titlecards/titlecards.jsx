import React, { useEffect, useRef, useState } from 'react';
import './Titlecards.css'


const Titlecards=({title,category})=> {
  const [apiData, setApiData] = useState([]);


  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlmOGZkMTM4MGQ2OWY0MTg1YmY3ZjRiZDVkNDg5ZSIsIm5iZiI6MTc0MDkyMzQyNi44NjQsInN1YiI6IjY3YzQ2MjIyODlhZmZmOWUzMjRlMjkzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZqGxFUlDNRyNmyjeHU3ICv48RMS_-6u68_R1NktQIs8'
    }
  };
  
  

const handlewheel =(event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));
  cardsRef.current.addEventListener('wheel',handlewheel);
},[])
  return (
    <div className='titlecard'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt=''></img>
            <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default Titlecards
