import style from "./About.module.css"

const About = () => {
    return(
        <>
        <div className={style.contenedor}>
        <h2 className={style.titulo}>HI! My name is Gustavo</h2>
        <p className={style.parrafo}>I`m a web development student at SoyHenry.</p>
        <p className={style.parrafo}>I am 23 years old and I like to learn new skills <br/>and have challenging experiences.</p>
        <p className={style.parrafo}>I`m from Argentina, Mendoza.</p>
        <h2 className={style.titulo}>Technologies</h2>
        <p className={style.parrafo}>JAVASCRIPT-HTML-CSS-REACT-REDUX-<br/>NODE-EXPRESS-SQL</p>
        <div className={style.foto}></div>
        <h2 className={style.titulo}>Contact</h2>
        <p className={style.parrafo}>GustavoCortes934@gmail.com</p>
        </div>
        </>
    )
}

export default About