import React, {ChangeEvent} from 'react';

type Props = {
    text:string,
    onTextChange: (value:string) => void;
}

function SearchBar(props:Props) {

    function onTextChange(e:ChangeEvent<HTMLInputElement>){
        props.onTextChange(e.target.value)
    }
    return (
        <div>
            <input type="text" value={props.text} onChange={onTextChange}/>
        </div>
    );
}

export default SearchBar;