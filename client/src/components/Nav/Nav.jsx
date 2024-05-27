import { useNavigate, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";


const Nav = () =>{
    const navigate = useNavigate();

    const location = useLocation();
    const pathToHideNav = ["/"];
    const shouldHideNav = pathToHideNav.includes(location.pathname);


    return shouldHideNav ? null :(

        <div >
            <div className={style.navContainer}>                
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/2560px-F1.svg.png" alt="" className={style.logoImg} />
                <div className={style.btns}>                
                    <button onClick={()=>navigate("/home")}>Home</button>
                    <button onClick={()=>navigate("/about")}>About</button>
                </div>
            </div>
            <SearchBar />
        </div>
    )

}


export default Nav;