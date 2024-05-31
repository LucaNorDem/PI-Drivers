import { useSelector, useDispatch } from "react-redux";
import { useState  } from "react";
import { orderByBirth, orderByName, filterByTeam, cleanFilters } from "../../redux/actions";
import Cards from "../Cards/Cards";
import Form from "../Form/Form";
import Modal from "../Modal/Modal";
import style from "./Home.module.css";


const Home = (props) => {
    const [aux, setAux] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);



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

    const handleCleanFilters = (e) =>{
        dispatch(cleanFilters());
        setAux(!aux);
    }
    

    const openModal = () =>{
        setIsModalOpen(true);
    }
    
    
    const closeModal = () =>{
        setIsModalOpen(false);
    }



    return (

        <div className={style.homeContainer} >

            <div className={style.filtersContainer} >
                <div className={style.filters} >
                    <div className={style.filterBtns}>
                        Order by name:&nbsp;
                        <div>
                            <button value="NA" onClick={handleOrderName}>↓</button>
                            <button value="ND" onClick={handleOrderName}>↑</button>
                        </div>
                        
                    </div>
                    <div className={style.filterBtns}>
                        Order by birth:&nbsp;
                        <div>
                            <button value="BA" onClick={handleOrderBirth}>↓</button>
                            <button value="BD" onClick={handleOrderBirth}>↑</button>
                        </div>
                        
                    </div>
                    <div className={style.cleanFilterBtn}>
                        <button value="X" onClick={handleCleanFilters}>Clean all filters</button>
                    </div>

                    <div className={style.teamFilter}>
                        <select onChange={handleFilter} >
                            <option className={style.option} key="0" value="All">All</option>
                            {teams.map((team) => (
                                <option className={style.option} key={team.id} value={team.name} >{team.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className={style.cleanFilterBtn}>
                        <button onClick={openModal}>Add new driver</button>
                        <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
                            <Form />
                        </Modal>
                    </div>

                </div>

            </div>

            {/* pasamos por props el array al componente que renderiza las cards */}
            <div className={style.cardsContainer}>
                <Cards drivers={drivers} />
            </div>
        </div>

    )
}

export default Home;