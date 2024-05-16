import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import { getAllDrivers, getTeams, orderByBirth, orderByName, filterByTeam } from "../../redux/actions";

const Home = (props) => {
    const [aux, setAux] = useState(false);


    const drivers = useSelector((state) => state.filteredDrivers);
    const teams = useSelector((state)=> state.teams);
    const dispatch = useDispatch();

    const handleFilter = (e) =>{
        dispatch(filterByTeam(e.target.value));

    }

    const handleOrderName = (e) =>{
        dispatch(orderByName(e.target.value));
        setAux(!aux);
    }
    
    const handleOrderBirth = (e) =>{
        dispatch(orderByBirth(e.target.value));
        setAux(!aux);
    }
    

    return (

        <div>

            <div>
                <div> Order by name
                    <button value="A" onClick={handleOrderName}>↑</button>
                    <button value="D" onClick={handleOrderName}>↓</button>
                </div>
                <div> Order by birth
                    <button value="A" onClick={handleOrderBirth}>↑</button>
                    <button value="D" onClick={handleOrderBirth}>↓</button>
                </div>
                
                <select onChange={handleFilter} >
                    <option value="All">All</option>
                    {teams.map((team)=>(
                        <option value={team.name} key={team.id}>{team.name}</option>
                    ))}                    
                </select>
            </div>

            {/* pasamos por props el array al componente que renderiza las cards */}
            <div>
                <Cards drivers={drivers} />
            </div>
        </div>

    )
}

export default Home;