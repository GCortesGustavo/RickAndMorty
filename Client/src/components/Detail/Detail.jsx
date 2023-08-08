import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import style from "./Detail.module.css"

const Detail = () => {
   const {id} = useParams()
   const [character, setCharacter] = useState({});


   useEffect(() => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacter(data);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
      return setCharacter({});
   }, [id]);


   return(
      <div className={style.container}>
         <h2 className={style.title}>Name: {character?.name}</h2>
         <h2 className={style.title}>Status: {character?.status}</h2>
         <h2 className={style.title}>Species: {character?.species}</h2>
         <h2 className={style.title}>Gender: {character?.gender}</h2>
         <h2 className={style.title}>Origin: {character?.origin?.name}</h2>
         <img src={character?.image} alt="fotito" className={style.photo} />
      </div>
   )
}

export default Detail;