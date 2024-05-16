import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";
import { useDispatch } from "react-redux";
import { getDriver } from "../../redux/actions";

const Card = (props) =>{

    const id = Number(props.id)
    const name = `${props.name.forename} ${props.name.surname}`

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () =>{
        dispatch(getDriver(id));
        navigate(`/details?name=${name}`);
    }

    return (
        <div className={styles.CardDiv} onClick={handleClick}>
            <div>
                <img src={props.image.url} />
                <h2>{name}</h2>
                <h2>{props.teams}</h2>
            </div>
        </div>
    )

} 


export default Card;