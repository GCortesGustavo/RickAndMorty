import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom";

const Nav = ({onSearch}) => {
    return(
        <div>
            <SearchBar onSearch={onSearch} />
            
            <button>
                <Link to="/about">About</Link>
            </button>
            <button>
                <Link to="/home">Home</Link>
            </button>
            
        </div>

    )
}

export default Nav;