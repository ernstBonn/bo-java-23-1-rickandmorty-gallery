import React from 'react';
import Card from "./Card";
import './Gallery.css'

type Props = {
    characters:Character[]
}

type Character = {
    id:number,
    name:string
    species:string
    image:string
    status:string
}

function Gallery(props:Props) {
    return (
        <div className={"gallery-wrapper"}>
            {props.characters.map(currentChar => <Card character={currentChar}/>)}
        </div>
    );
}

export default Gallery;