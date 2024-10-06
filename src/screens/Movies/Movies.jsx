import React, { useEffect, useState } from 'react'
import MOVIES from '../../Context/MoviesApi'
import Hero from './Hero/Hero'
import Header from '../../Components/header/Header'
import Trending from './Trending/Trending'
import LatestUpdate from './LatestUpdate/LatestUpdate'
import Popular from './Popular/Popular'
import { NavLink } from 'react-router-dom'

function Movies() {

  const [movies, setMovies] = useState()
  const [moviesPage2, setMoviesPage2] = useState()
  const [highRated, setHignRated] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${MOVIES}/movies`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'authorization': document.cookie
      })

    })
      .then(res => res.json())
      .then(data => {
        setMovies(data.data.movies);
      })
  }, [])
  useEffect(() => {
    fetch(`${MOVIES}/movies/?page=2`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'authorization': document.cookie
      })

    })
      .then(res => res.json())
      .then(data => {
        setMoviesPage2(data.data.movies);
      })
  }, [])

  useEffect(() => {
    fetch(`${MOVIES}/movies/highest-rated`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'authorization': document.cookie
      })

    })
      .then(res => res.json())
      .then(data => {
        setHignRated(data.data.movies);
        setLoading(false)
      })
  }, [])

  if(!movies)return  <div>Please Login...<NavLink  to="/"><button style={{color:'#000'}}>Login</button></NavLink></div>;

  const addMovieEventHandler=(e)=>{
    e.preventDefault();
    location.href = "/createmovie"
  }

  // console.log(movies)
  return (
    <>
      {!loading && <Header />}
      {!loading && <Hero movies={highRated} />}
      {!loading && <button className='addMovieBtn' onClick={addMovieEventHandler} style={{display:'flex',backgroundColor:"var(--pText-color)",border:'none',padding:'1rem 2rem',fontSize:16,margin:'auto',marginTop:10,borderRadius:".2rem"}}>Add New Movie</button>}
      {!loading && <Trending movies={moviesPage2} />}
      {!loading && <LatestUpdate movies={movies} />}
      {!loading && <Popular movies={moviesPage2} />}
      {!loading && <Popular movies={moviesPage2} />}
    </>
  )
}

export default Movies