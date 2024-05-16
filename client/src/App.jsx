import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from "react-router-dom"
import { getAllDrivers, getTeams, filterByTeam } from "./redux/actions";
import './App.css'
import LandingView from "./views/LandingView"
import HomeView from "./views/HomeView"
import DetailsView from "./views/DetailsView"
import TeamsView from "./views/TeamsView"
import FormView from "./views/FormView"
import AboutView from "./views/AboutView"
import Nav from "./components/Nav/Nav"

function App() {


  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();


  //usamos useEffect para hacer el dispatch que obtendra todos los drives del back y los guardara en el estado global la action
  useEffect(() => {

    const loadData = async () => {
      await dispatch(getAllDrivers());
      await dispatch(getTeams());
      await dispatch(filterByTeam("All"))

      setLoading(false);
    }
    loadData();

  }, [dispatch]);


  //La renderiza el contenido despues de terminar de cargar la info que necesaria en el estado global a traves de los dispatch del useEffect
  return loading ? <div>Loading...</div> : (

    <div>

      <Nav />
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="/home" element={<HomeView />} />
        <Route path="/details" element={<DetailsView />} />
        <Route path="/teams" element={<TeamsView />} />
        <Route path="/form" element={<FormView />} />
        <Route path="/About" element={<AboutView />} />
      </Routes>

    </div>
  )
}

export default App
