import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = ({onSearch, setAccess}) => {
    
    const handleLogOut = () => {
        setAccess(false);
        
    }
    return(
        <div className={style.nav}>
            <SearchBar onSearch={onSearch} />
            
            <div className={style.buttons}>
                <Link to="/about">ABOUT</Link>

                <Link to="/home">HOME</Link>
                
                <Link to="/favorites">FAVORITES</Link>
            {/* <button className={style.about}>
                <Link to="/about">About</Link>
            </button>
            <button className={style.home}>
                <Link to="/home">Home</Link>
            </button> */}
            </div>

            <button onClick={handleLogOut}>Log Out</button>
        </div>

    )
}

export default Nav;