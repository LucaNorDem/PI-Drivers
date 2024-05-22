import { useNavigate, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";


const Nav = () =>{
    const navigate = useNavigate();

    const location = useLocation();
    const pathToHideNav = ["/"];
    const shouldHideNav = pathToHideNav.includes(location.pathname);


    return shouldHideNav ? null :(

        <div>
            <button onClick={()=>navigate("/home")}>Home</button>
            <button onClick={()=>navigate("/about")}>About</button>
            <SearchBar />
        </div>
    )

}


export default Nav;