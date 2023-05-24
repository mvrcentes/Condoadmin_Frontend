//icon
import search_icon from "../../assets/search_icon.svg";

//style
import "./SearchBar.css";

const SearchBar = ({value, onChange}) => {
    return (
        <div className="searchBar-input">
            <img src={search_icon} alt="search icon" className="icon" />
            <input
                className="input-Searchbar"
                type="text"
                placeholder="Buscar"
                value={value}
                onChange={onChange}
            />

        </div>
    );
};

export  { SearchBar };
