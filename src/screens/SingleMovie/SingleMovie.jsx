import React, { useEffect, useState } from 'react'
import MOVIES from '../../Context/MoviesApi'
import { NavLink, useParams } from 'react-router-dom'
import Header from '../../Components/header/Header'
import './SingleMovie.css'


function SingleMovie() {
    const [movie, setMovie] = useState()
    const [loading, setLoading] = useState(true)

    const { id } = useParams('')

    useEffect(() => {
        fetch(`${MOVIES}/movies/${id}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'authorization': document.cookie
            })

        })
            .then(res => res.json())
            .then(data => {
                if (data.status === "success") {
                    setMovie(data.data.movie);
                    setLoading(false)
                    console.log(data.data.movie);
                }
                else {
                    alert(data.message);
                }
            })
    }, [])

    if (loading) return <div>Loading...</div>

    const SMovieWhereWatchBTNClicked = (e) => {
        const WhereToWatch = document.querySelector(".SingleMovieLeft");
        const Details = document.querySelector(".SingleMovieRight");

        const WhereToWatchBtn = document.querySelector(".SMovieWhereWatchBTN");
        const DetailsBtn = document.querySelector(".SMovieDetailBTN");

        WhereToWatchBtn.setAttribute("style", "color: var(--pText-color);border-bottom: 2px solid  var(--pText-color);")
        DetailsBtn.setAttribute("style", "")

        WhereToWatch.setAttribute("style", "display:flex")
        Details.setAttribute("style", "display:none")

    }
    const SMovieDetailBTNClicked = (e) => {
        const WhereToWatch = document.querySelector(".SingleMovieLeft");
        const Details = document.querySelector(".SingleMovieRight");

        const WhereToWatchBtn = document.querySelector(".SMovieWhereWatchBTN");
        const DetailsBtn = document.querySelector(".SMovieDetailBTN");

        DetailsBtn.setAttribute("style", "color: var(--pText-color);border-bottom: 2px solid  var(--pText-color);")
        WhereToWatchBtn.setAttribute("style", "color:antiquewhite;border-bottom:none;")

        WhereToWatch.setAttribute("style", "display:none")
        Details.setAttribute("style", "display:flex")


    }

    return (
        <>
            {loading && <div>Loading...</div>}
            {!loading && <Header />}
            <div className='SingleMovie'>
                <div className="SingleMovieTopContainer">
                    <div className='SingleMovieBg'>
                        <img src={movie.Images[1]} alt="" width={"100%"} />
                    </div>
                    <div className="SingleMovieFg">
                        <div className="singleMoviePoster">
                            <img src={movie.Poster} alt="" />
                        </div>
                        <div className="SingleMovieInfo">
                            <div className='Title'>{movie.Title}</div>
                            <h2>{movie.Type} </h2>
                            <h1>{movie.Rated} &nbsp;&nbsp;&nbsp;&nbsp;{movie.Year}&nbsp;&nbsp;&nbsp;&nbsp;{movie.Runtime}min&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ whiteSpace: "nowrap" }}><i className="fa-brands fa-imdb"></i>&nbsp;{movie.imdbRating} <span style={{ color: "#fff9", fontSize: '1.3rem' }}>({movie.imdbVotes})</span></span></h1>
                            <p>{movie.Plot}</p>
                            <div className="SMovieBtnFg">
                                <NavLink>&nbsp;&nbsp;ADD TO WATCHLIST</NavLink>
                                <NavLink><i class="fa-solid fa-play"></i> &nbsp;&nbsp;TRAILOR</NavLink>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="SingleMovieContainer">
                    <div className="SingleMovieTop2">
                        <div className="SMovieBtn">
                            <NavLink>ADD TO WATCHLIST</NavLink>
                            <NavLink> <i class="fa-solid fa-play"></i> TRAILOR</NavLink>
                        </div>
                        <div className="SingleMovieInfoBar">
                            <button className='SMovieWhereWatchBTN' onClick={SMovieWhereWatchBTNClicked}>WHERE TO WATCH </button>
                            <button className='SMovieDetailBTN' onClick={SMovieDetailBTNClicked}>DETAILS </button>
                        </div>

                    </div>
                    <hr />
                    <div className="SingleMovieLeft">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <path fill="#F44336" d="M5 18c.7 0 1.3 0 2 0 0 4.1 0 8.1 0 12.2-.8.1-1.6.2-2.3.3-1-2.5-2.7-6.8-2.7-6.8S2 28 2 30.8c.4 0-.2 0-2 .3 0-4.3 0-8.7 0-13 .8 0 2 0 2 0l3 7.3C5 25.4 5 20.8 5 18zM14.7 20c0-.6 0-1.4 0-2-1.9 0-3.8 0-5.7 0 0 4 0 8 0 12 1.9-.2 3.8-.4 5.7-.6 0-.6 0-1.4 0-2-1.2.1-2.4.1-3.7.4 0-1.1 0-1.7 0-2.8.9 0 2.1 0 3 0 0-.6 0-1.4 0-2-.9 0-2.1 0-3 0 0-1.1 0-1.9 0-3C11.6 20.1 14.2 20.1 14.7 20zM16 20c.1 0 1.9 0 2 0 0 3.2 0 6 0 9.2.7 0 1.3 0 2-.1 0-3.2 0-5.9 0-9.1.7 0 1.3 0 2 0 0-.6 0-1.4 0-2-2.1 0-3.9 0-6 0C16 18.6 16 19.4 16 20zM28.6 18c-1.9 0-3.7 0-5.6 0 0 3.8 0 7.2 0 11 .2 0 .4 0 .6 0 .4 0 .9 0 1.4 0 0-1.6 0-2.4 0-4 .1 0 2.4 0 2.7 0 0-.6 0-1.4 0-2-.3 0-2.6 0-2.7 0 0-1 0-2 0-3 .2 0 3.1 0 3.6 0C28.6 19.5 28.6 18.6 28.6 18zM32 27.5c0-3.3 0-6.2 0-9.5-.7 0-1.3 0-2 0 0 3.8 0 7.4 0 11.2 1.8.1 3.6.2 5.4.4 0-.6 0-1.3 0-1.9C34.3 27.6 33.1 27.5 32 27.5zM37 29.7c.7.1 1.3.1 2 .2 0-4 0-7.9 0-11.9-.7 0-1.3 0-2 0C37 22 37 25.8 37 29.7zM45.4 24.2c.9-2 1.7-4 2.6-6.1-.7 0-1.5 0-2.2 0-.5 1.3-.9 2.2-1.4 3.4-.5-1.3-.8-2.2-1.3-3.4-.7 0-1.5 0-2.2 0 .8 2 1.5 4 2.4 6.1-.9 2-1.7 4-2.6 6 .7.1 1.4.2 2.1.3.5-1.3 1-2.2 1.5-3.5.5 1.4 1 2.4 1.5 3.8.7.1 1.6.2 2.3.3C47.1 28.7 46.2 26.3 45.4 24.2z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <linearGradient id="SzbnDW2eD0FmObEe0gqGxa_mJTj7Q9EPSVn_gr1" x1="39.88" x2="9.652" y1="8.12" y2="38.349" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#46cdef"></stop><stop offset="1" stop-color="#012962"></stop></linearGradient><path fill="url(#SzbnDW2eD0FmObEe0gqGxa_mJTj7Q9EPSVn_gr1)" d="M35,42H13c-3.866,0-7-3.134-7-7V13c0-3.866,3.134-7,7-7h22c3.866,0,7,3.134,7,7v22	C42,38.866,38.866,42,35,42z"></path><path fill="#fff" d="M28.018,14.651c0.154-0.092,0.313-0.191,0.48-0.277c0.431-0.221,0.91-0.332,1.397-0.308	c0.351,0.019,0.671,0.117,0.917,0.375c0.234,0.24,0.32,0.535,0.345,0.855c0.006,0.068,0.006,0.135,0.006,0.209v3.186	c0,0.277-0.037,0.313-0.313,0.313H30.1c-0.049,0-0.098,0-0.148-0.006c-0.073-0.006-0.135-0.068-0.148-0.141	c-0.013-0.068-0.013-0.135-0.013-0.203v-2.849c0.006-0.117-0.006-0.227-0.037-0.338c-0.049-0.191-0.221-0.326-0.418-0.338	c-0.363-0.024-0.726,0.049-1.058,0.203c-0.049,0.013-0.08,0.062-0.073,0.111v3.236c0,0.062,0,0.117-0.013,0.178	c0,0.086-0.068,0.148-0.154,0.148l0,0c-0.092,0.006-0.184,0.006-0.283,0.006h-0.652c-0.227,0-0.277-0.056-0.277-0.283v-2.91	c0-0.105-0.006-0.216-0.03-0.32c-0.043-0.209-0.221-0.357-0.431-0.369c-0.369-0.024-0.744,0.049-1.077,0.209	c-0.049,0.013-0.08,0.068-0.068,0.117v3.279c0,0.227-0.049,0.277-0.277,0.277h-0.825c-0.216,0-0.27-0.062-0.27-0.27v-4.27	c0-0.049,0.006-0.098,0.019-0.148c0.024-0.073,0.098-0.117,0.172-0.117h0.769c0.111,0,0.178,0.068,0.216,0.172	c0.03,0.086,0.049,0.167,0.08,0.259c0.062,0,0.098-0.043,0.141-0.068c0.338-0.209,0.695-0.388,1.095-0.461	c0.308-0.062,0.615-0.062,0.923,0c0.289,0.062,0.548,0.234,0.714,0.48c0.013,0.019,0.024,0.03,0.037,0.043	C28.006,14.638,28.012,14.638,28.018,14.651z M18.926,14.885c0.043-0.013,0.08-0.037,0.105-0.073	c0.111-0.111,0.227-0.216,0.351-0.313c0.32-0.246,0.72-0.369,1.12-0.338c0.16,0.006,0.216,0.056,0.227,0.209	c0.013,0.209,0.006,0.424,0.006,0.634c0.006,0.086,0,0.167-0.013,0.252c-0.024,0.111-0.068,0.154-0.178,0.167	c-0.086,0.006-0.167,0-0.252-0.006c-0.412-0.037-0.812,0.043-1.2,0.172c-0.086,0.03-0.086,0.092-0.086,0.16V18.7	c0,0.056,0,0.105-0.006,0.16c-0.006,0.08-0.068,0.141-0.148,0.141c-0.043,0.006-0.092,0.006-0.135,0.006h-0.8	c-0.043,0-0.092,0-0.135-0.006c-0.08-0.006-0.141-0.073-0.148-0.154c-0.006-0.049-0.006-0.098-0.006-0.148v-4.184	c0-0.283,0.03-0.313,0.313-0.313h0.591c0.16,0,0.234,0.056,0.277,0.209C18.852,14.565,18.889,14.719,18.926,14.885z M21.325,16.595	v-2.184c0.006-0.148,0.062-0.203,0.209-0.209c0.32-0.006,0.64-0.006,0.96,0c0.141,0,0.184,0.043,0.197,0.184	c0.006,0.056,0.006,0.105,0.006,0.16v4.097c0,0.068-0.006,0.135-0.013,0.203c-0.006,0.08-0.068,0.135-0.148,0.141	c-0.037,0.006-0.068,0.006-0.105,0.006h-0.855c-0.03,0-0.056,0-0.086-0.006c-0.086-0.006-0.16-0.073-0.167-0.16	c-0.006-0.049-0.006-0.098-0.006-0.148C21.325,17.997,21.325,17.296,21.325,16.595z M22.039,11.999	c0.098-0.006,0.197,0.013,0.289,0.043c0.332,0.111,0.504,0.4,0.474,0.775c-0.024,0.32-0.264,0.578-0.585,0.628	c-0.135,0.024-0.277,0.024-0.412,0c-0.351-0.068-0.609-0.326-0.585-0.769C21.257,12.239,21.546,11.999,22.039,11.999z M16.717,16.091c-0.024-0.32-0.111-0.634-0.24-0.923c-0.252-0.529-0.64-0.917-1.23-1.052c-0.677-0.148-1.286,0-1.84,0.412	c-0.037,0.037-0.08,0.068-0.129,0.092c-0.013-0.006-0.024-0.013-0.024-0.019c-0.019-0.062-0.03-0.123-0.049-0.184	c-0.049-0.154-0.111-0.209-0.277-0.209c-0.184,0-0.375,0.006-0.56,0c-0.141-0.006-0.27,0.013-0.369,0.123	c0,2.153,0,4.313,0.006,6.459c0.08,0.129,0.203,0.154,0.345,0.148c0.221-0.006,0.443,0,0.664,0c0.388,0,0.388,0,0.388-0.381v-1.753	c0-0.043-0.019-0.092,0.024-0.129c0.308,0.24,0.683,0.388,1.071,0.424c0.542,0.056,1.033-0.08,1.446-0.449	c0.302-0.277,0.523-0.634,0.64-1.028C16.749,17.118,16.76,16.607,16.717,16.091z M15.247,17.364	c-0.043,0.191-0.141,0.363-0.283,0.492c-0.16,0.135-0.357,0.216-0.566,0.216c-0.313,0.019-0.621-0.049-0.898-0.197	c-0.068-0.03-0.111-0.098-0.105-0.172v-1.114c0-0.369,0.006-0.739,0-1.107c-0.006-0.086,0.043-0.16,0.123-0.191	c0.338-0.16,0.689-0.234,1.058-0.16c0.259,0.037,0.48,0.203,0.585,0.443c0.092,0.197,0.148,0.412,0.16,0.628	C15.358,16.595,15.358,16.989,15.247,17.364z M33.408,16.995c0.461,0.086,0.935,0.092,1.397,0.019	c0.27-0.037,0.529-0.117,0.769-0.246c0.277-0.16,0.48-0.381,0.566-0.689c0.216-0.775-0.117-1.557-0.923-1.845	c-0.394-0.129-0.812-0.172-1.224-0.117c-0.972,0.111-1.605,0.646-1.894,1.575c-0.203,0.634-0.178,1.279-0.013,1.919	c0.216,0.818,0.757,1.304,1.575,1.476c0.467,0.105,0.941,0.086,1.409,0.013c0.246-0.043,0.492-0.105,0.726-0.197	c0.141-0.056,0.216-0.141,0.209-0.302c-0.006-0.148,0-0.302,0-0.455c0-0.184-0.073-0.24-0.252-0.197	c-0.179,0.043-0.351,0.08-0.529,0.117c-0.381,0.08-0.775,0.08-1.157,0.013c-0.523-0.105-0.861-0.553-0.831-1.107	C33.291,16.977,33.352,16.982,33.408,16.995z M33.254,16.054c0.019-0.148,0.062-0.289,0.117-0.424	c0.184-0.449,0.572-0.603,0.966-0.578c0.111,0.006,0.221,0.03,0.326,0.073c0.16,0.068,0.264,0.216,0.283,0.388	c0.019,0.105,0.013,0.216-0.019,0.32c-0.073,0.221-0.252,0.313-0.467,0.357c-0.129,0.03-0.264,0.043-0.4,0.03	c-0.24,0-0.486-0.019-0.726-0.056C33.241,16.152,33.241,16.152,33.254,16.054z"></path><path fill="#fff" d="M14.322,27.167c0.039-0.132,0.079-0.258,0.119-0.389c0.303-1.023,0.607-2.039,0.91-3.063l0.039-0.119	c0.033-0.119,0.145-0.192,0.264-0.192h1.004c0.251,0,0.303,0.073,0.218,0.311l-0.396,1.049c-0.442,1.149-0.885,2.304-1.327,3.452	c-0.013,0.039-0.033,0.079-0.047,0.119c-0.047,0.139-0.184,0.231-0.33,0.218c-0.29-0.006-0.581-0.006-0.871,0	c-0.205,0.006-0.323-0.086-0.396-0.27c-0.165-0.436-0.337-0.878-0.501-1.313c-0.396-1.037-0.799-2.073-1.195-3.116	c-0.039-0.079-0.066-0.172-0.086-0.258c-0.02-0.132,0.026-0.198,0.158-0.198c0.376-0.006,0.753,0,1.122,0	c0.158,0,0.231,0.106,0.27,0.244c0.073,0.251,0.145,0.509,0.225,0.759c0.27,0.918,0.534,1.842,0.806,2.759	C14.302,27.167,14.309,27.167,14.322,27.167z M18.996,25.979v2.376c-0.013,0.132-0.073,0.192-0.205,0.198	c-0.356,0.006-0.706,0.006-1.063,0c-0.132,0-0.192-0.066-0.205-0.192c-0.006-0.039-0.006-0.086-0.006-0.125v-4.568	c0.006-0.205,0.059-0.264,0.264-0.264h0.951c0.205,0,0.264,0.059,0.264,0.264V25.979L18.996,25.979z M18.263,21.034	c0.132-0.013,0.264,0.013,0.389,0.066c0.258,0.099,0.436,0.337,0.449,0.614c0.053,0.601-0.35,0.904-0.885,0.891	c-0.073,0-0.145-0.013-0.218-0.026c-0.409-0.099-0.62-0.416-0.581-0.871c0.033-0.363,0.317-0.634,0.706-0.667	C18.17,21.034,18.217,21.028,18.263,21.034z M36.27,25.596c0.006-0.075-0.02-0.231-0.02-0.237c-0.013-0.125-0.039-0.251-0.073-0.37	c-0.244-0.871-0.792-1.446-1.683-1.67c-0.416-0.099-0.838-0.112-1.261-0.047c-0.891,0.132-1.532,0.607-1.842,1.452	c-0.303,0.806-0.297,1.69,0.006,2.495c0.264,0.732,0.792,1.195,1.552,1.386c0.403,0.099,0.825,0.125,1.241,0.066	c1.386-0.165,1.961-1.215,2.053-2.125c0,0,0.033-0.274,0.033-0.399L36.27,25.596z M34.686,26.823	c-0.039,0.139-0.099,0.264-0.184,0.383c-0.145,0.205-0.376,0.337-0.627,0.356c-0.125,0.013-0.251,0.013-0.376-0.013	c-0.278-0.053-0.509-0.237-0.62-0.495c-0.099-0.205-0.158-0.429-0.178-0.654c-0.033-0.389-0.039-0.779,0.053-1.162	c0.033-0.152,0.099-0.303,0.178-0.436c0.145-0.237,0.396-0.389,0.673-0.409c0.125-0.013,0.251-0.013,0.376,0.013	c0.264,0.053,0.482,0.225,0.601,0.468c0.112,0.231,0.178,0.489,0.192,0.746c0.006,0.119,0.013,0.237,0.006,0.356	C34.798,26.269,34.765,26.553,34.686,26.823z M24.699,21.081h-0.918c-0.251,0-0.297,0.047-0.297,0.297v2.139	c0,0.047,0.02,0.092-0.013,0.139c-0.059-0.006-0.092-0.047-0.139-0.073c-0.687-0.403-1.406-0.475-2.133-0.139	c-0.509,0.237-0.825,0.667-1.03,1.175c-0.198,0.489-0.244,1.004-0.231,1.525c0,0.489,0.112,0.97,0.33,1.406	c0.251,0.482,0.614,0.851,1.142,1.01c0.72,0.225,1.393,0.112,2.006-0.343c0.047-0.026,0.073-0.073,0.132-0.086	c0.033,0.073,0.059,0.152,0.073,0.231c0.026,0.106,0.119,0.178,0.231,0.178h0.158c0.237,0,0.468,0.006,0.7,0	c0.184,0,0.237-0.059,0.244-0.251v-6.957C24.949,21.127,24.897,21.081,24.699,21.081z M23.491,25.939v1.201	c0.013,0.079-0.033,0.152-0.106,0.184c-0.317,0.178-0.68,0.251-1.037,0.198c-0.303-0.033-0.568-0.218-0.706-0.489	c-0.106-0.211-0.165-0.436-0.184-0.667c-0.053-0.416-0.02-0.838,0.079-1.241c0.033-0.112,0.073-0.218,0.132-0.323	c0.139-0.258,0.403-0.423,0.693-0.442c0.35-0.033,0.7,0.033,1.016,0.178c0.079,0.026,0.125,0.106,0.119,0.192	C23.484,25.14,23.491,25.537,23.491,25.939L23.491,25.939z M28.685,26.461c0.383-0.026,0.765-0.099,1.109-0.284	c0.35-0.172,0.594-0.495,0.667-0.878c0.047-0.237,0.047-0.489-0.006-0.726c-0.139-0.594-0.515-0.963-1.082-1.155	c-0.317-0.099-0.654-0.139-0.984-0.125c-1.109,0.026-1.953,0.587-2.297,1.697c-0.231,0.732-0.198,1.479,0.026,2.211	c0.231,0.753,0.759,1.208,1.511,1.413c0.323,0.079,0.66,0.112,0.99,0.099c0.482-0.006,0.963-0.099,1.419-0.27	c0.192-0.073,0.237-0.139,0.237-0.343v-0.475c-0.006-0.192-0.086-0.258-0.278-0.211c-0.145,0.039-0.284,0.073-0.429,0.106	c-0.442,0.106-0.904,0.125-1.354,0.047c-0.449-0.086-0.753-0.343-0.871-0.792c-0.033-0.132-0.059-0.264-0.073-0.403	c0.033,0,0.066,0,0.092,0.013C27.801,26.461,28.243,26.494,28.685,26.461z M27.306,25.404c0.047-0.258,0.106-0.509,0.264-0.72	c0.244-0.323,0.581-0.416,0.963-0.376c0.033,0,0.059,0.013,0.092,0.013c0.462,0.073,0.574,0.442,0.489,0.799	c-0.066,0.264-0.284,0.363-0.528,0.409c-0.132,0.026-0.27,0.039-0.409,0.033c-0.27-0.006-0.534-0.026-0.799-0.066	C27.319,25.49,27.293,25.464,27.306,25.404L27.306,25.404z"></path><path fill="#fff" d="M24.374,35.998c-0.231-0.006-0.463-0.006-0.693,0c-0.318-0.017-0.636-0.029-0.954-0.052	c-0.844-0.064-1.683-0.191-2.503-0.382c-2.839-0.659-5.331-1.983-7.505-3.908c-0.203-0.18-0.393-0.364-0.59-0.55	c-0.046-0.041-0.087-0.099-0.11-0.156c-0.035-0.081-0.017-0.168,0.041-0.231c0.058-0.063,0.151-0.087,0.231-0.052	c0.052,0.023,0.104,0.046,0.151,0.075c2.076,1.284,4.342,2.22,6.718,2.775c0.798,0.185,1.601,0.329,2.411,0.434	c1.162,0.145,2.335,0.197,3.503,0.156c0.63-0.017,1.255-0.075,1.879-0.156c1.457-0.185,2.897-0.515,4.29-0.977	c0.734-0.242,1.451-0.521,2.151-0.844c0.104-0.058,0.231-0.075,0.347-0.046c0.191,0.046,0.306,0.242,0.26,0.434	c-0.006,0.023-0.017,0.052-0.029,0.075c-0.046,0.087-0.11,0.162-0.191,0.219c-0.665,0.521-1.382,0.977-2.139,1.359	c-1.428,0.722-2.955,1.237-4.527,1.532C26.207,35.865,25.294,35.963,24.374,35.998z M34.313,30.361	c0.382,0.012,0.757,0.035,1.127,0.133c0.104,0.029,0.203,0.064,0.3,0.11c0.133,0.052,0.219,0.18,0.237,0.318	c0.023,0.162,0.029,0.329,0.017,0.497c-0.075,0.989-0.382,1.942-0.891,2.792c-0.185,0.306-0.41,0.584-0.67,0.827	c-0.052,0.052-0.116,0.093-0.185,0.116c-0.11,0.029-0.18-0.029-0.185-0.139c0.006-0.058,0.017-0.116,0.041-0.174	c0.203-0.544,0.399-1.081,0.555-1.642c0.093-0.306,0.156-0.618,0.197-0.937c0.012-0.116,0.017-0.231,0.006-0.347	c-0.006-0.197-0.133-0.364-0.324-0.422c-0.18-0.058-0.364-0.093-0.555-0.104c-0.532-0.023-1.063,0-1.59,0.07l-0.699,0.087	c-0.075,0.006-0.145,0-0.185-0.07c-0.041-0.07-0.023-0.139,0.017-0.208c0.046-0.064,0.104-0.122,0.174-0.162	c0.428-0.306,0.908-0.492,1.417-0.613C33.509,30.412,33.908,30.373,34.313,30.361z"></path>
                        </svg>
                    </div>
                    <div className="SingleMovieRight">
                        <p><span>Movie :</span>{movie.Title}</p>
                        <p><span>Type :</span>{movie.Type}</p>
                        <p><span>Duration :</span>{movie.Runtime}min</p>
                        <p><span>Story :</span>{movie.Plot}</p>

                    </div>

                </div>

            </div>
        </>
    )
}

export default SingleMovie