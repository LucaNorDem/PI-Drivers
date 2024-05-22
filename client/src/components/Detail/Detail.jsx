import { useState, useEffect } from "react";


const Detail = ({driver, team}) =>{

    const { name, description, dob, nationality, image, teams } = driver;



    return !driver ? <div>Cargando...</div>:(
        <div>
            <div>
                <img src={image?.url} />
                <div>                    
                    <h1>{name?.forename} {name?.surname}</h1>
                    <h2>Nationality: {nationality}</h2>
                    <h2>Birthday: {dob}</h2>
                    <div>
                        <h2>Teams: </h2>
                        {teams ? team.map((t)=>{
                            return (<div key={t.id}>
                                    <img src={t.image}/>
                                    <h2>{t.name}</h2>
                                </div>)
                        }): "No teams information"}
                    </div>
                    
                </div>
            </div>
            <div>
                <h3>Description</h3>
                <p>{description ? description : "Driver doesn't have a description"}</p>
            </div>
            
        </div>
    )

}

export default Detail;