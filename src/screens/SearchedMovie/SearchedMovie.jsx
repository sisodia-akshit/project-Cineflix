import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import "./SearchedMovie.css"
import Header from '../../Components/header/Header'

function SearchedMovie() {
    const { searched } = useParams()
    const [movies, setMovies] = useState([])
    const [result, setResult] = useState()


    const getSearch = async () => {
        try {
            const response = await fetch(`https://p9firj2bbb.ap-south-1.awsapprunner.com/api/v1/movies/?Title=${searched}`, {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'authorization': document.cookie
                })
            })
            const data = await response.json()
            setMovies(data.data.movies)
            setResult(data.length)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSearch()
    }, []);

    return (
        <>
            <Header />
            <div className='searchedMovie'>
                {result === 0 && <h1>Not found</h1>}
                {result > 1 && <h1>{result} Movies found</h1>}
                {result === 1 && <h1>{result} Movie found</h1>}
                <div className='searchedMovieContainer'>
                    {movies.length > 0 && movies.map((movie, index) => {
                        return (
                            <NavLink to={`/cineflix/${movie._id}`} key={index} className='searchedMovieCard'>
                                <img src={movie.Poster} alt={movie.Title} />
                                <h2>{movie.Title}</h2>
                            </NavLink>
                        )
                    })}
                    {movies.length === 0 && <h1 className='nullResult'>oops!!, no movie found with the name "{searched}"</h1>}
                </div>
            </div>
        </>
    )
}

export default SearchedMovie