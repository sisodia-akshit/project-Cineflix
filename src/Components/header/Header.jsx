import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  const [searchQuery,setSearchQuery]=useState()

  const getSearch = async()=>{
    try {
      const response = await fetch(`https://p9firj2bbb.ap-south-1.awsapprunner.com/api/v1/movies/?Title=${searchQuery}`,{
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
          'authorization': document.cookie
        })
      })
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const MenuClickedEventHandler = (e) => {
    const MenuBtn = document.querySelector(".MenuBtn");
    const sidenav = document.querySelector(".sidenav");
    sidenav.setAttribute("style", "width:100%")
  }
  const hideSidenavEventHandler = (e) => {
    const MenuBtn = document.querySelector(".MenuBtn");
    const sidenav = document.querySelector(".sidenav");
    sidenav.setAttribute("style", "")
  }
  const searchBtnClicked=(e)=>{
    const search = document.querySelector(".search");
    search.setAttribute("style", "display:flex");
  }
  const seacrhCancelEventHandler=(e)=>{
    const search = document.querySelector(".search");
    search.setAttribute("style", "");
  }
  const searchBtnEventHandler=(e)=>{
    window.location = `/search/${searchQuery}`
  }
  return (
    <div className='Header'>
      <button className='MenuBtn' onClick={MenuClickedEventHandler}><i className="fa-solid fa-bars"></i></button>
      <div className="sidenav" >
        <div className="sidenavLeft">
          <button onClick={hideSidenavEventHandler}>Go Back</button>
          <NavLink to="/cineflix" className="nav-link">Home</NavLink>
          <NavLink to="/cineflix" className="nav-link">Movies</NavLink>
          <NavLink to="/cineflix" className="nav-link">Series</NavLink>
        </div>
        <div className="sidenavRight" onClick={hideSidenavEventHandler}>

        </div>
      </div>
      <div className='nav'>
        <NavLink to="/cineflix" className="logo">Cineflix</NavLink>
        <ul>
          <li><NavLink href="/home">Home</NavLink></li>
          <li><NavLink href="/movies">Movies</NavLink></li>
          <li><NavLink href="/series">Series</NavLink></li>
        </ul>
      </div>
      <button className="showSearch" onClick={searchBtnClicked}><i className="fa-solid fa-magnifying-glass"></i></button>
      <div className="search">
        <input type="text" placeholder="Search..." onChange={(e)=>setSearchQuery(e.target.value)} />
        <button onClick={searchBtnEventHandler}>Search</button>
        <div className="searchCancel" onClick={seacrhCancelEventHandler}><i className="fa-solid fa-xmark"></i></div>
      </div>
      <div className="profile">
        <NavLink to='/profile' className="Hprofile">
          <img src="https://e0.pxfuel.com/wallpapers/495/16/desktop-wallpaper-chibi-boy-anime.jpg" alt="img" />
        </NavLink>
      </div>
    </div>
  )
}

export default Header