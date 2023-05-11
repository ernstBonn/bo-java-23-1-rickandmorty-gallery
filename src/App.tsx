import React, {useEffect, useState} from 'react';
import './App.css';
import logo from './rickandmortylogo.png'
import CharacterGallery from "./CharacterGallery/CharacterGallery";
import SearchBar from "./SearchBar/SearchBar";
import {RandMCharacter} from "./Model/RandMCharacter";
import axios from "axios";

function App() {

    const [characterResponse, setCharacterResponse] = useState<RandMCharacter[]>([])


    useEffect(getAllCharacter,[])


    function getAllCharacter(){
        axios.get("https://rickandmortyapi.com/api/character")
            .then(response => {
                setCharacterResponse(response.data.results)
            })
    }


    const [filter, setFilter] = useState<string>("")


    const filteredList:RandMCharacter[] = characterResponse.filter(current =>
        current.name.toLowerCase().includes(filter.toLowerCase()))


    return (
        <div className="App">
            <header className={"App-header"}>Rick and Morty Character Gallery
                <img
                    src={logo}
                    className="App-logo" alt="logo"/>
                <SearchBar onTextChange={setFilter} text={filter}/>
                <CharacterGallery  characterList={filteredList} searchText={setFilter}/>
            </header>
        </div>
    );
}

export default App;
