import style from "./About.module.css"

const About = () => {
    return(
        <>
        <div className={style.contenedor}>
        <h2 className={style.titulo}>HI! My name is Gustavo</h2>
        <p className={style.parrafo}>I`m a web developer</p>
        <p className={style.parrafo}>I`m from Argentina, Mendoza</p>
        <h2 className={style.titulo}>Technologies</h2>
        <p className={style.parrafo}>JS-HTML-CSS-REACT-REDUX</p>
        <div className={style.foto}></div>
        </div>
        
        </>
        
    )
}

export default About