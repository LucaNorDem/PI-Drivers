import { useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import Filters from "../Filters/Filters";
import style from "./Home.module.css";


const Home = () => {

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