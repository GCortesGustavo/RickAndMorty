import SearchBar from "../SearchBar/SearchBar"


const Nav = ({onSearch}) => {
    return(
        <div>
            <SearchBar onSearch={onSearch} />
        </div>

    )
}

export default Nav;