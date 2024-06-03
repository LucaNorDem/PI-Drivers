import { useSelector, useDispatch } from "react-redux";
import { useState  } from "react";
import { orderByBirth, orderByName, filterByTeam, cleanFilters } from "../../redux/actions";
import Cards from "../Cards/Cards";
import Form from "../Form/Form";
import Modal from "../Modal/Modal";
import Filters from "../Filters/Filters";
import style from "./Home.module.css";


const Home = (props) => {

    const drivers = useSelector((state) => state.filteredDrivers);


    return (

        <div className={style.homeContainer} >

            <div className={style.filtersContainer} >                
                <Filters />
            </div>

            {/* pasamos por props el array al componente que renderiza las cards */}
            <div className={style.cardsContainer}>
                <Cards drivers={drivers} />
            </div>
        </div>

    )
}

export default Home;