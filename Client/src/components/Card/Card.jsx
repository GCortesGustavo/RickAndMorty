import style from "./Card.module.css"
import { Link, useLocation } from "react-router-dom";
import {addFav, removeFav} from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";


function Card(props) {
   const {id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites} = props;
   const location = useLocation()
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true)
         addFav({id, name, status, species, gender, origin, image})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);


   return (
      <div className={style.container}>
         {/* {
            isFav
            ? (
               <button onClick={handleFavorite} className={style.fav}>❤️</button>
            ) : (
               <button onClick={handleFavorite} className={style.fav}>🤍</button>
            )
         }


         <button className={style.exit} onClick={() => {onClose(id)}}>❌</button> */}

      {/* <button className="heart" onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
      {!pathname.includes("/favorites") && (
      <button className="close" onClick={() => onClose(id)}>❌</button>
      )} */}

      {location.pathname !== '/favorites'?<button  className={style.exit} onClick={()=>{onClose(id)}}>❌</button>: <button className={style.exit}></button>}

      <button className={style.fav} onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>


         <div className={style.minicontainer}>
         <Link to={`/detail/${id}`}><h2 className={style.name}>Name: {name}</h2></Link>
         <h2 className={style.gender}>Gender:{gender}</h2>
         {/* <h2 className={style.species}>Specie: {species}</h2>
         <h2 className={style.gender}>Gender: {gender}</h2> */}
         {/* <h2 className={style.origin}>Origin: {origin}</h2> */}
         </div>


         <img className={style.image} src={image} alt='character' /> 

      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card)