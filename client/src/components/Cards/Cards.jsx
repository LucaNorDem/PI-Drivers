import { useState, useEffect } from "react"
import Pages from "../Pages/Pages";
import Pagination from "../Pages/Pagination";
import style from "./Cards.module.css"

const Cards = (props) => {

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

    return (
        <div className={style.cardsHomeContainer}>
            <Pages drivers={currentDrivers} />
            <Pagination driversPerPage={driversPerPage} totalDrivers={drivers.length} paginate={paginate} currentPage={currentPage} />
        </div>
    )

}


export default Cards;