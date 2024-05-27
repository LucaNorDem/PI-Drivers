import { useState, useEffect } from "react"
import Pages from "../Pages/Pages";
import Pagination from "../Pages/Pagination";
import { useLocation } from "react-router-dom";
import Card from "../Card/Card";
import style from "./Cards.module.css"

const Cards = (props) => {

    const location = useLocation();
    const [drivers, setDrivers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const driversPerPage = 9;

    useEffect(() => {
        setDrivers(props.drivers);
    }, [props.drivers]);


    const lastDriverIndex = currentPage * driversPerPage;
    const firstDriverIndex = lastDriverIndex - driversPerPage;
    const currentDrivers = drivers.slice(firstDriverIndex, lastDriverIndex);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return location.pathname === "/results"
        ? (
            <div className={style.cardsResultsContainer}>
                {props.drivers.map((driver) => {
                    return <Card id={driver.id} key={driver.id} name={driver.name} image={driver.image} />
                })}
            </div>
            )
        : (
            <div className={style.cardsHomeContainer}>
                <Pages drivers={currentDrivers} />
                <Pagination driversPerPage={driversPerPage} totalDrivers={drivers.length} paginate={paginate} currentPage={currentPage} />
            </div>
        )

}


export default Cards;