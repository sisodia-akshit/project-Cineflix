import React, { useState } from "react";
import Movies from "../../../Context/MoviesApi";
import '../SignUp/SignUp.css'
import { NavLink } from "react-router-dom";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const FormSubmitEventHandler = async (event) => {
        event.preventDefault();
        let user = {
            email,
            password,
        };
        try {
            const responce = await fetch(`${Movies}/auth/login`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            // console.log(await responce.json())
            const data = await responce.json();
            if (data.status === "success") {
                document.cookie = `Bearer ${data.token}`;
                location.href = "/cineflix";
            }
        } catch (error) {
            console.log(error);

        }
    };

    return (
        <section className="register">
            <form onSubmit={FormSubmitEventHandler}>
                <legend>Sign In</legend>
                <label>Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    placeholder="Email"
                    required
                ></input>
                <br></br>
                <label>Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    placeholder="Password"
                    required />
                <br></br>
                <div className="formBtn">
                    <NavLink>Forget Password ?</NavLink>
                    <button type="submit">Sign In</button>
                </div>
                <div className="SignIn">
                    <span>Dont't have an Account ?</span><NavLink to='/signup'>Sign Up</NavLink>
                </div>
            </form>
            </section>
    );
}

export default SignIn;