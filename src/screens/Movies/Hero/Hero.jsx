import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import './Hero.css'

function Hero(props) {
    const movies = props.movies;


    let [slideNum, setSlide] = useState(1);
    let [play, setPlay] = useState(true);
    
    function showSlides(n) {
        setSlide(slideNum + 1)
        setPlay(false)
        let slides = document.getElementsByClassName("hero");
        if (n > slides.length) { setSlide(1); setPlay(true) }
        if (n < 1) { setSlide(slides.length) }
        for (let i = 0; i < slides.length; i++) {
            document.getElementById(`hero${i + 1}`).style.display = "none";
        }
        if(n !==slides.length+1){
            document.getElementById(`hero${n}`).style.display = "flex";
        }
    }
    
    useEffect(() => {
        if (play) {
            showSlides(slideNum)
        }else{
            setTimeout(() => {
                showSlides(slideNum)
            }, 7000)
        }

    }, [slideNum])


    return (
        <>
            {movies.map((movie, i) => {
                return (
                    <section className="hero" id={`hero${i + 1}`} key={i}>
                        <div className="bgImg">
                            <img src={movie.Images[2]} alt="Poster" />
                        </div>
                        <div className="heroDetails">
                            <div className="spotlight">#{i + 1}</div>
                            <div className="title">{movie.Title}</div>
                            <h2>{movie.Type} &nbsp;&nbsp;&nbsp;<span>{movie.Year}</span></h2>
                            <div className="genre">{movie.Genre[0]}&nbsp;&nbsp;|&nbsp;&nbsp;{movie.Genre[1]}&nbsp;&nbsp;|&nbsp;&nbsp;{movie.Genre[2]}</div>
                            <h1><span><i className="fa-solid fa-star"></i></span> &nbsp;&nbsp;{movie.imdbRating}</h1>

                            <NavLink className='heroBtn' to={`/cineflix/${movie._id}`}>
                                <button className="btn btn1">Watch Now</button>

                                <button className="btn btn2"><i className="fa-solid fa-play"></i></button>
                            </NavLink>

                            <div className="plot">{movie.Plot}</div>
                        </div>

                    </section>
                )

            })}
             {/* <div className="heroslidBtn"> 
                <div className="next" onClick={nextBtnEventHandler}><i className="fa-solid fa-chevron-right"></i></div>
                <div className="prev" onClick={prevBtnEventHandler}><i className="fa-solid fa-angle-left"></i></div>
            </div> */}

        </>
    );
}

export default Hero