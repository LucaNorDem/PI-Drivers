import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Cards from "../components/Cards/Cards";
import { getAllDrivers, getTeams, filterByTeam } from "../redux/actions";
import Home from "../components/Home/Home";

const HomeView = () =>{

    
    return (

        <Home />
        
    )

}

export default HomeView;