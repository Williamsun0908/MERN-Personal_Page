import React from 'react'
import NavBar from '../components/NavBar'
import RecentWritings from '../components/RecentWritings'
import AboutMe from '../components/AboutMe'
import bg_img from "../bg_img.jpg"

const HomePage = () => {
  return (
    <div>
    <AboutMe/>
    <RecentWritings/>
    <div className="m-2"/>
    </div>
  )
}

export default HomePage
