import Card from "../Card/Card";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
// import { useState } from "react";

const Favorites = ({myFavorites}) => {
    const dispatch = useDispatch();
    // const [aux, setAux] = useState(false)

    const handlerOrder = (event) => {
        dispatch(orderCards(event.target.value))
        
    }

    const handlerFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div>
            <select onChange={handlerOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select onChange={handlerFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                <option value="allCharacters">All Characters</option>
            </select>
            {
                myFavorites?.map(fav => {
                    return(
                        <Card 
                            key={fav.id}
                            id={fav.id}
                            name={fav.name}
                            species={fav.species}
                            gender={fav.gender}
                            image={fav.image}          
                        />
                    )
                })
                // {myFavorites.length === 0 ? (
                //     <h3 className='emptyFav'>Empty favorites list!</h3>
                //   ) : (
                //     <Card characters={myFavorites} />
                //   )}
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites,
    }
}
export default connect (
    mapStateToProps,
    null
)(Favorites)