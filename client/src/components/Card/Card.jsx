


const Card = (props) =>{

    return (
        <div>

            <div>
                <img src={props.image.url} />
                <h2>{`${props.name.forename} ${props.name.surname}`}</h2>
            </div>
        </div>
    )

} 


export default Card;