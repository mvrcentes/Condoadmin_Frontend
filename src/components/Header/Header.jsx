import React from "react"
import { SearchBar } from "../SearchBar/SearchBar"
import { PlusButton } from "../PlusButton/PlusButton"
import "./Header.css"


export const Header = () => {
    return (
        <div className="Header">
            <SearchBar className="searchBar"></SearchBar>
            <PlusButton className="plusButton"></PlusButton>
        </div>
    )
}

