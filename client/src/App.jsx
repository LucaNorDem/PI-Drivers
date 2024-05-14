import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import LandingView from "./views/LandingView"
import HomeView from "./views/HomeView"
import DetailsView from "./views/DetailsView"
import TeamsView from "./views/TeamsView"
import FormView from "./views/FormView"
import AboutView from "./views/AboutView"
import Nav from "./components/Nav/Nav"

function App() {
  

  return (

    <div>

      <Nav />
      <Routes>
        <Route path = "/" element = {<LandingView />} />
        <Route path = "/home" element = {<HomeView />} />
        <Route path = "/details" element = {<DetailsView />} />
        <Route path = "/teams" element = {<TeamsView />} />
        <Route path = "/form" element = {<FormView />} />
        <Route path = "/About" element = {<AboutView />} />
      </Routes>

    </div>
  )
}

export default App
