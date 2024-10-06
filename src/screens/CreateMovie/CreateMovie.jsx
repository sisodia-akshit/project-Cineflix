import React from 'react'

function CreateMovie() {
    const MovieFormEventHandler=(e)=>{
        e.preventDefault();
        alert("This functionality  is not implemented yet");

    }
    return (
        <div>
            <form onSubmit={MovieFormEventHandler}>
                <legend>Add Movie Details</legend>
                <label>Movie Name:</label>
                <input type="text" name="title" placeholder='Movie Name' required />
                {/* <br/> */}
                <label>Rated:</label>
                <select name="rated" required>
                    <option value="G">G</option>
                    <option value="PG">PG</option>
                    <option value="PG13">PG-13</option>
                    <option value="R">R</option>
                    <option value="18+">18+</option>
                </select>
                <br />

                {/* <legend>ReleaseYear & Date</legend> */}
                <label>Released Year:</label>
                <input type="number" name="year" placeholder='Released Year' required />
                {/* <br/> */}
                <label>Released Date:</label>
                <input type="date" name="releasedDate" required />

                <br />
                <label>Runtime:</label>
                <input type="number" name="runtime" placeholder='Runtime in minutes' required />
                {/* <br/> */}
                <label>Genre</label>
                <select name="genre" required>
                    <option value="Action">Action</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    <option value="Horror">Horror</option>
                    <option value="Romance">Romance</option>
                    <option value="SciFi">Sci-fi</option>
                </select>
                <br />

                <label>Director:</label>
                <input type="text" name="director" placeholder='Director' required />
                {/* <br/> */}
                <label>Writer:</label>
                <input type="text" name="writer" placeholder='Writer' required />
                {/* <br/> */}
                <label>Actors:</label>
                <input type="text" name="actors" placeholder='Actors' required />
                <br />

                <label>Country:</label>
                <input type="text" name="country" placeholder='Country' required />
                {/* <br/> */}
                <label>Awards:</label>
                <input type="text" name="awards" placeholder='Awards' required />
                {/* <br/> */}
                <label>Language:</label>
                <select name="language" required>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Korean">Korean</option>
                </select>
                <br />


                <label>Poster:</label>
                <input type="text" name="poster" placeholder='Poster Link' required />
                {/* <br/> */}
                <label>Metascore:</label>
                <input type="text" name="metascore" placeholder='Metascore ?! "N/A"' required />
                <br />
                <label>imdbRating:</label>
                <input type="number" name="imdbRating" placeholder='imdbRating' required />
                {/* <br/> */}
                <label>imdbVotes:</label>
                <input type="text" name="imdbVotes" placeholder='imdbVotes' required />
                {/* <br/> */}
                <label>imdbID:</label>
                <input type="text" name="imdbID" placeholder='imdbID' required />
                <br />
                <label>Type:</label>
                <select name="type" required>
                    <option value="movie">Movie</option>
                    <option value="series">Series</option>
                    <option value="anime">Anime</option>
                    <option value="cartoon">Cartoon</option>
                </select>
                {/* <br/> */}
                <label>Response:</label>
                <select name="response" required>
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
                <br />
                <label>Images:</label>
                <input type="text" name="images" placeholder='Image Link' required />
                <br />
                <label>Plot:</label>
                <textarea name="plot" placeholder='Plot' required />
                <br />

                <div className="formBtn">
                    <button type="submit">Add Movie</button>
                </div>
            </form>
        </div>
    )
}

export default CreateMovie