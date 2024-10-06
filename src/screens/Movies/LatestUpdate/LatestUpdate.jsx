import React, { useState } from "react";
import "./LatestUpdate.css"
import { NavLink } from "react-router-dom";

function LatestUpdate(props) {
    const movies = props.movies;

    const LatestNextHandler = () => {
        const Movies = document.querySelector(".LatestMovies")
        const poster = document.querySelectorAll(".LatestMovie")
        // console.log(poster[0].offsetWidth);
        Movies.scrollLeft += poster[0].offsetWidth;
    }
    const LatestPrevHandler = () => {
        const Movies = document.querySelector(".LatestMovies")
        const poster = document.querySelectorAll(".LatestMovie")
        // console.log(poster[0].offsetWidth);
        Movies.scrollLeft -= poster[0].offsetWidth;
    }
    const LatestMoviesEventHandler = (e) => {
        // console.log("worlas")
    }

    if (!movies) return <h1>Loading...</h1>
    return (
        <div className="LatestMain">
            <h2>Latest Update</h2>
            <div className="LatestContainer">
                <div className="LatestMovies"  onScroll={LatestMoviesEventHandler}>
                    {
                        movies.map((currMovie, index) => {
                            return (
                                <NavLink to={`/cineflix/${currMovie._id}`} className="LatestMovie" key={index}>

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
                    <button className="nextButton trendingBtn" onClick={LatestNextHandler}><i className="fa-solid fa-chevron-right"></i></button>
                    <button className="prevButton trendingBtn" onClick={LatestPrevHandler}><i className="fa-solid fa-chevron-left"></i></button>
                </div>
            </div>

        </div >
    );
}

export default LatestUpdate;