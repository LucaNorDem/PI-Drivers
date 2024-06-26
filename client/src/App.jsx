import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, useNavigate } from "react-router-dom"
import { getAllDrivers, getTeams, filterByTeam } from "./redux/actions";
import LandingView from "./views/LandingView"
import HomeView from "./views/HomeView"
import DetailsView from "./views/DetailsView"
import AboutView from "./views/AboutView"
import Nav from "./components/Nav/Nav"
import ResultsView from "./views/ResultsView"
import ErrorView from './views/ErrorView';
import style from "./App.module.css";

function App() {


  const [loading, setLoading] = useState(true);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  //usamos useEffect para hacer el dispatch que obtendra todos los drives del back y los guardara en el estado global la action.
  useEffect(() => {

    const loadData = async () => {
      await dispatch(getAllDrivers());
      await dispatch(getTeams());
      await dispatch(filterByTeam("All"))

      setLoading(false);
    }
    loadData();

  }, [dispatch]);

  useEffect(() => {
    if (error.status === 500) {
      navigate("/error", { state: { error: error } });
    }
  }, [error])



  //La renderiza el contenido despues de terminar de cargar la info que necesaria en el estado global a traves de los dispatch del useEffect.
  return loading
    ? <div className={style.loading} >
      <img className={style.loadImg} src="https://d3nv2arudvw7ln.cloudfront.net/staticfolder/Tyre/resources/img/red-parentesi.png" alt="" />
      <p>
        Loading...
      </p>
    </div>
    : (

      <div>

        <Nav />
        <Routes>
          <Route path="/" element={<LandingView />} />
          <Route path="/home" element={<HomeView />} />
          <Route path="/details" element={<DetailsView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/results" element={<ResultsView />} />
          <Route path="/error" element={<ErrorView />} />
        </Routes>

      </div>
    )
}

export default App
