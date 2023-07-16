import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom";

const Nav = ({onSearch}) => {
    return(
        <div>
            <SearchBar onSearch={onSearch} />
            <Link>
                <button>About</button>
                <button>Home</button>
            </Link>
        </div>

    )
}

export default Nav;