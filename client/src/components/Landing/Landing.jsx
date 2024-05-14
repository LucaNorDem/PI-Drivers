import { useNavigate } from "react-router-dom";

const Landing = () =>{

    const navigate = useNavigate();

    return (
        <div>
            <h1>F1 Drivers</h1>
            <button onClick={()=>navigate("/home")}>See Drivers</button>
        </div>
    )
}


export default Landing;