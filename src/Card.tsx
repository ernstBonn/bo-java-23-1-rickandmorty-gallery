import React from 'react';
import "./Card.css"

type Props = {
    character: Character
}

type Character = {
    id: number,
    name: string
    species: string
    image: string
    status: string
}

function Card(props: Props) {
    return (
        <div className={"card-wrapper"}>
            <div className={props.character.status === "Alive" ? "alive " : "dead "}>
                <h1>Name: {props.character.name}</h1>
                <img src={props.character.image} alt={props.character.name}/>
                <p>Species: {props.character.species}</p>
                <p>Species: {props.character.status}</p>
            </div>
        </div>
    );
}

export default Card;