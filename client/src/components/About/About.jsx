import style from "./About.module.css"

const About = () =>{

    return (
        <div className={style.aboutContainer}>
            <div className={style.infoContainer}>
                <h1>Lucas Angelo Demartin</h1>
                <p>Individual project "Drivers" from Soy Henry full stack web development course, created using lerned technologies in the bootcamp (React, Redux, Axios, Express, etc...).</p>
            </div>
            <div>
                <h3>Contact</h3>
                <a href="https://www.instagram.com/lucanordem/" target="_blank" aria-label="Instagram Profile" className={style.instagram} ></a>                
                <a href="https://www.linkedin.com/in/lucas-demartin-8661b1213/" target="_blank" aria-label="Linkedin Profile" className={style.linkedin} ></a>                
                <a href="https://github.com/LucaNorDem" target="_blank" aria-label="GitHub Profile" className={style.git} ></a>
            </div>
        </div>
    )

}

export default About;