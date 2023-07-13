import style from "./Card.module.css"

export default function Card(props) {
   const {name, status, species, gender, origin, image, onClose} = props
   return (
      <div className={style.container}>
         <button onClick={onClose}>X</button>
         <h2 className={style.name}>{name}</h2>
         <h2 className={style.status}>{status}</h2>
         <h2 className={style.species}>{species}</h2>
         <h2 className={style.gender}>{gender}</h2>
         <h2 className={style.origin}>{origin}</h2>
         <img className={style.image} src={image} alt='' /> 
      </div>
   );
}