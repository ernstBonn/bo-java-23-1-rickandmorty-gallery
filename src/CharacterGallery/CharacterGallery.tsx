import CharacterCard from "../CharacterCard/CharacterCard";
import "./CharacterGallery.css";
import {useState} from "react";
import {RandMCharacter} from "../Model/RandMCharacter";

type GalleryProps = {
    characterList: RandMCharacter[]
    searchText(searchText: string): void
}

export default function CharacterGallery(props: GalleryProps) {

    const [filter, setFilter] = useState("")

    const filteredList = props.characterList.filter(({name}) =>
        name.toLowerCase().includes(filter.toLowerCase()))


    return (
        <>
            <div className={"CharacterGallery"}>
                {filteredList.map((character: RandMCharacter) =>
                    <CharacterCard character={character} key={character.id}/>)}
            </div>
        </>
    )
}