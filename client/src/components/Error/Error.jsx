import { useLocation } from "react-router-dom";
import style from "./Error.module.css"

const Error = () =>{
    const location = useLocation();
    const {error} = location.state || {};

    return(
        <div className={style.errorContainer}>
            {error
                ? (
                    <div>
                        <h1 className={style.errorType}>ERROR&nbsp; {error.status}</h1>
                        <p className={style.errorMessage}>{error.message}</p>
                    </div>
                )
                :   <div>
                        <p>Something went wrong, try again later</p>
                    </div>}
        </div>
    )

}

export default Error;