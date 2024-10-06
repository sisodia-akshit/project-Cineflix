import React, { useState } from "react";
import "./Popular.css";
import { NavLink } from "react-router-dom";

function Popular(props) {
    const movies = props.movies;

    const PopularNextHandler = () => {
        const Movies = document.querySelector(".PopularMovies")
        const poster = document.querySelectorAll(".PopularMovie")
        // console.log(poster[0].offsetWidth);
        Movies.scrollLeft += poster[0].offsetWidth;
    }
    const PopularPrevHandler = () => {
        const Movies = document.querySelector(".PopularMovies")
        const poster = document.querySelectorAll(".PopularMovie")
        // console.log(poster[0].offsetWidth);
        Movies.scrollLeft -= poster[0].offsetWidth;
    }
    const PopularMoviesEventHandler = (e) => {
        // console.log("worlas")
    }

    if (!movies) return <h1>Loading...</h1>
    return (
        <div className="PopularMain">
            <h2>Popular</h2>
            <div className="PopularContainer">
                <div className="PopularMovies" id="PopularMovies" onScroll={PopularMoviesEventHandler}>
                    {
                        movies.map((currMovie, index) => {
                            return (
                                <NavLink to={`/cineflix/${currMovie._id}`} className="PopularMovie" key={index}>
                                    <div className="PopularDetail">{index < 9 && <span>0{index + 1}</span>}{index > 8 && <span>{index + 1}</span>}<h4>{currMovie.Title}</h4></div>
                                    <div className="PopularPoster">
                                        <div className="count">{index < 9 && <span>0{index + 1}</span>}{index > 8 && <span>{index + 1}</span>}</div>
                                        <img src={currMovie.Poster} alt="poster" />
                                    </div>
                                </NavLink>)
                        })
                    }
                </div>
                <div className="PopularController">
                    <button className="nextButton PopularBtn" onClick={PopularNextHandler}><i className="fa-solid fa-chevron-right"></i></button>
                    <button className="prevButton PopularBtn" onClick={PopularPrevHandler}><i className="fa-solid fa-chevron-left"></i></button>
                </div>
            </div>

        </div >
    );
}

export default Popular