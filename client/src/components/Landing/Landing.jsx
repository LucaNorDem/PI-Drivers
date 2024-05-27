import { useNavigate } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () =>{

    const navigate = useNavigate();

    return (
        <div className={style.landingContainer}>
            <h1 className={style.h1}>F1 Drivers</h1>
            <button className={style.btn} onClick={()=>navigate("/home")}>See Drivers</button>
        </div>
    )
}


export default Landing;