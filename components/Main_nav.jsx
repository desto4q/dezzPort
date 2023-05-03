import React from 'react'
import { Link } from 'react-router-dom'

function Main_nav() {
  return (
    <div className="main_nav">
        <div className="container">
        <span>logo</span>
        <span>
            <Link to={"/"}>Home </Link>
            <Link to={"/"}>About </Link>
            <Link to={"/"}>Services </Link>
            <Link to={"/"}>Experience </Link>
            <Link to={"/"}>Project </Link>
            <Link to={"/"}>Contact </Link>
        </span>
        </div>
    </div>
  )
}

export default Main_nav