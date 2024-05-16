
import Card from "../Card/Card"

const Cards = (props) =>{

    
    return (
        <div>
            <div>{props.drivers.map((driver)=>{
                return(
                    <Card 
                    id = {driver.id}
                    key = {driver.id}
                    name = {driver.name}
                    image = {driver.image}
                    birthday = {driver.dob}
                    nationality = {driver.nationality}
                    teams = {driver.teams}
                    description = {driver.description}
                    />
                )
            })}</div>
        </div>
    )

}


export default Cards;