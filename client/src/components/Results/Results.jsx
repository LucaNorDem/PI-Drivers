import Cards from "../Cards/Cards";
import { useSelector } from "react-redux/es/hooks/useSelector";
import style from "./Results.module.css";

const Results = () =>{

    const searchReasult = useSelector((state) => state.searchResults);
    const error = useSelector((state) => state.error);

    return error.status === 404
    ?   <div className={style.error} >
            <h1>{error.status}</h1>
            <p>{error.message}</p>
        </div>
    :(
        <div>
            <Cards drivers={searchReasult} />
        </div>
    )

}

export default Results;