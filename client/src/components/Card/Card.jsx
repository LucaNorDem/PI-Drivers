import { useNavigate } from "react-router-dom";
import style from "./Card.module.css";
import { useDispatch } from "react-redux";
import { getDriver } from "../../redux/actions";

const Card = (props) =>{

    const id = props.id;
    let name = props.name;

    if(typeof name === "object"){
        name = `${name.forename} ${name.surname}`
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () =>{
        dispatch(getDriver(id));
        navigate(`/details?name=${name}`);
    }

    return (
        <div className={style.CardDiv} onClick={handleClick}>
            <div className={style.cardInfo}>
                <div className={style.imgContainer}>                    
                    <img className={style.img} src={props.image.url} />
                </div>
                <div className={style.nameTeam}>                    
                    <h2 className={style.name}>{name}</h2>
                    <h2 className={style.team}>{props.teams}</h2>
                </div>
            </div>
        </div>
    )

} 


export default Card;