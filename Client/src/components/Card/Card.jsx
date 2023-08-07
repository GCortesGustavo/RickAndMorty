import style from "./Card.module.css"
import { Link } from "react-router-dom";
import {addFav, removeFav} from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card(props) {
   const {id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites} = props;

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
         {
            isFav
            ? (
               <button onClick={handleFavorite} className={style.fav}>❤️</button>
            ) : (
               <button onClick={handleFavorite} className={style.fav}>🤍</button>
            )
         }


         <button className={style.exit} onClick={() => onClose(id)}>X</button>


         <div className={style.minicontainer}>
         <Link to={`/detail/${id}`}><h2 className={style.name}>Name: {name}</h2></Link>
         <h2 className={style.status}>Status: {status}</h2>
         {/* <h2 className={style.species}>Specie: {species}</h2>
         <h2 className={style.gender}>Gender: {gender}</h2> */}
         <h2 className={style.origin}>Origin: {origin}</h2>
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