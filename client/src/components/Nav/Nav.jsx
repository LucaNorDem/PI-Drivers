import { useNavigate, useLocation } from "react-router-dom";


const Nav = () =>{
    const navigate = useNavigate();

    const location = useLocation();
    const pathToHideNav = ["/"];
    const shouldHideNav = pathToHideNav.includes(location.pathname);


    return shouldHideNav ? null :(

        <div>
            <button onClick={()=>navigate("/home")}>Home</button>
            <button onClick={()=>navigate("/teams")}>Teams</button>
            <button onClick={()=>navigate("/about")}>About</button>
        </div>
    )

}


export default Nav;