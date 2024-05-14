import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../components/Cards/Cards";

const HomeView = () =>{
    //Creamos un estado local para traer y guardar los datos de los drivers
    const [drivers, setDrivers] = useState([]);


    //usamos useEffect para obtener los datos de los drivers y guardarlos en el estado local cuando se monta el componente
    useEffect(() => {

        //Funcion async para hacer el get de todos los drivers
        const getDrivers = async () => {
            try {
                const response = await axios("http://localhost:3001/drivers");
                setDrivers(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        //Ejecutamos la funcion creada arriba
        getDrivers();
    }, []);


    //pasamos por props el array al componente que renderiza las cards
    return(
        <Cards drivers = {drivers}/>
    )

}

export default HomeView;