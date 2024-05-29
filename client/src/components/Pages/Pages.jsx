import Card from "../Card/Card";
import style from "./Pages.module.css"

const Pages = (props) => {



    return (
        <div className={style.pageContainer} > 
            <div className={style.cardsContainer} >{props.drivers.map((driver) => {
                return (
                    <Card
                        id={driver.id}
                        key={driver.id}
                        name={driver.name}
                        image={driver.image}
                        birthday={driver.dob}
                        nationality={driver.nationality}
                        teams={driver.teams}
                        description={driver.description}
                    />
                )
            })}</div>
        </div>
    )
}

export default Pages;