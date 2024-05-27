import { useState, useEffect } from "react";
import style from "./Detail.module.css"


const Detail = ({driver, team}) =>{

    const { name, description, dob, nationality, image, teams } = driver;



    return !driver ? <div>Cargando...</div>:(
        <div className={style.detailContainer} >
            <div className={style.driverInfo} >
                <div className={style.imgContainer} >                    
                    <img src={image?.url} />
                </div>
                <div>                    
                    <h1 className={style.driverName} >{name?.forename} {name?.surname}</h1>
                    <h2>Nationality: {nationality}</h2>
                    <h2>Birthday: {dob}</h2>
                    <div className={style.teamsInfo} >
                        <h2>Teams: </h2>
                        <div className={style.tInfo} >
                            {teams ? team.map((t) => {
                            return (<div className={style.team} key={t.id}>
                                        <img src={t.image} />
                                        <h2>{t.name}</h2>
                                    </div>)
                        }) : "No teams information"}
                        </div>
                        
                    </div>
                    
                </div>
            </div>

            <hr  />
            <div className={style.descInfo} >
                <h3>Description</h3>
                <p>{description ? description : "Driver doesn't have a description"}</p>
            </div>
            
        </div>
    )

}

export default Detail;