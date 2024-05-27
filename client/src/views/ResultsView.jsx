import Cards from "../components/Cards/Cards";
import { useSelector } from "react-redux/es/hooks/useSelector";



const ResultsView = () =>{

    const searchReasult = useSelector((state) => state.searchResults);

    return(
        <div>
            <Cards drivers={searchReasult} />
        </div>
    )

}


export default ResultsView;