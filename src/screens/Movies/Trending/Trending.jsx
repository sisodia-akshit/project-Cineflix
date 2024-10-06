import React, { useState } from "react";
import "./Trending.css";
import { NavLink } from "react-router-dom";

function Trending(props) {
    const movies = props.movies;

    const trendingNextHandler = () => {
        const Movies = document.querySelector(".trendingMovies")
        const poster = document.querySelectorAll(".trendingMovie")
        // console.log(poster[0].offsetWidth);
        Movies.scrollLeft += poster[0].offsetWidth;
    }
    const trendingPrevHandler = () => {
        const Movies = document.querySelector(".trendingMovies")
        const poster = document.querySelectorAll(".trendingMovie")
        // console.log(poster[0].offsetWidth);
        Movies.scrollLeft -= poster[0].offsetWidth;
    }
    const trendingMoviesEventHandler = (e) => {
        // console.log("worlas")
    }

    if (!movies) return <h1>Loading...</h1>
    return (
        <div className="trendingMain">
            <h2>Trending</h2>
            <div className="trendingContainer">
                <div className="trendingMovies" id="trendingMovies" onScroll={trendingMoviesEventHandler}>
                    {
                        movies.map((currMovie, index) => {
                            return (
                                <NavLink to={`/cineflix/${currMovie._id}`} className="trendingMovie" key={index}>
                                    <div className="trendingDetail">{index < 9 && <span>0{index + 1}</span>}{index > 8 && <span>{index + 1}</span>}<h4>{currMovie.Title}</h4></div>
                                    <div className="trendingPoster">
                                        <div className="count">{index < 9 && <span>0{index + 1}</span>}{index > 8 && <span>{index + 1}</span>}</div>
                                        <img src={currMovie.Poster} alt="poster" />
                                    </div>
                                </NavLink>)
                        })
                    }
                </div>
                <div className="trendingController">
                    <button className="nextButton trendingBtn" onClick={trendingNextHandler}><i className="fa-solid fa-chevron-right"></i></button>
                    <button className="prevButton trendingBtn" onClick={trendingPrevHandler}><i className="fa-solid fa-chevron-left"></i></button>
                </div>
            </div>

        </div >
    );
}

export default Trending;