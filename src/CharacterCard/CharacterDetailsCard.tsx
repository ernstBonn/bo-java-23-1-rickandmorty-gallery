import React from 'react';
import {Link, useParams } from 'react-router-dom';
import { CharacterModel } from '../CharacterModel/CharacterModel';
import { RandMCharacter } from '../Model/RandMCharacter';
type Props = {
    character: RandMCharacter[]
}
function CharacterDetailsCard(props: Props) {

    const params = useParams()
    const id :string | undefined = params.id

    const foundCharacterModel: RandMCharacter | undefined = props.character.find(currentCharacterModel => currentCharacterModel.id.toString() === id)

    return (
        <div>
            <h1>{foundCharacterModel?.name}</h1>
            <img src={foundCharacterModel?.image}/>
            <h2>{foundCharacterModel?.status}</h2>
            <Link to={"/"}>back</Link>
        </div>
    );
}

export default CharacterDetailsCard;