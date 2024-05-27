import style from "./About.module.css"

const About = () =>{

    return (
        <div className={style.aboutContainer}>
            <div className={style.infoContainer}>
                <h1>Lucas Angelo Demartin</h1>
                <p>Proyecto individual Drivers del curso de desarrollo web full stack de Soy Henry, creado usando las tecnologías aprendidas durante el cursado (React, Redux, Axios, Express, entre otras).</p>
            </div>
            <div>
                <h3>Contact</h3>
                <a href="https://github.com/LucaNorDem" target="_blank" aria-label="GitHub Profile" className={style.git} ></a>
                <a href="https://www.instagram.com/lucanordem/" target="_blank" aria-label="Instagram Profile" className={style.instagram} ></a>                
            </div>
        </div>
    )

}

export default About;