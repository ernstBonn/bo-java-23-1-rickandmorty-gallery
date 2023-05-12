import React, {useEffect, useState} from 'react';
import './App.css';
import logo from './rickandmortylogo.png'
import CharacterGallery from "./CharacterGallery/CharacterGallery";
import SearchBar from "./SearchBar/SearchBar";
import {RandMCharacter} from "./Model/RandMCharacter";
import axios from "axios";


type Info = {
    next:string,
    prev:string,
}

function App() {



    const [characters, setCharacters] = useState<RandMCharacter[]>([])

    const [info, setInfo] = useState<Info>({next:"",prev:""})
    const [url, setUrl] = useState<string>("https://rickandmortyapi.com/api/character")

    function onClickSetUrlNext(){
     setUrl(info.next)
    }
    function onClickSetUrlPrev(){
     setUrl(info.prev)
    }


    function getAllCharacter() {
        axios.get(url)
            .then(response => {
                setCharacters(response.data.results)
                setInfo(response.data.info)
            })
    }

    useEffect(getAllCharacter, [url])


    const [filter, setFilter] = useState<string>("")

    const filteredList: RandMCharacter[] = characters.filter(current =>
        current.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div className="App">
            <header className={"App-header"}>Rick and Morty Character Gallery
                <img
                    src={logo}
                    className="App-logo" alt="logo"/>
                <SearchBar onTextChange={setFilter} text={filter}/>
                {info.next === null ? <></> : <button onClick={onClickSetUrlNext}>NEXT</button>}
                {info.prev === null ? <></> : <button onClick={onClickSetUrlPrev}>PREV</button>}
                <CharacterGallery characterList={filteredList} searchText={setFilter}/>
            </header>
        </div>
    );
}

export default App;
