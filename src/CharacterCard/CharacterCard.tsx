import "./CharacterCard.css"
import {RandMCharacter} from "../Model/RandMCharacter";

type CharacterCardProps = {
    character: RandMCharacter;
}

export default function CharacterCard(props: CharacterCardProps) {
    return (
        <div className={"CharacterCard"}>
            <h3>{props.character.name}</h3>
            <img src={props.character.image} alt={props.character.name}/>
            <p className={props.character.status === "Alive" ? "alive " : "dead "}>Status : {props.character.status}</p>
        </div>
    )
}