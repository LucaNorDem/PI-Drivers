import Detail from "../components/Detail/Detail";
import { useSelector, useDispatch } from "react-redux";


const DetailView = () =>{

    const driver = useSelector((state)=>state.driver);
    const team = useSelector((state)=>state.driverTeams);
    

    return(
        <div>
            <Detail driver={driver} team={team}/>
        </div>
    )

}

export default DetailView;