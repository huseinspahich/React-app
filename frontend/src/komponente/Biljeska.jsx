import { useState } from "react";

function Biljeska(props){

    function klik(){
        props.obrisi(props.id)
    }

    return(
        <div className="note">
            <h1>{props.naslov}</h1>
            <p>{props.sadrzaj}</p>
            <button onClick={klik}>DELETE</button>
        </div>
    )

}

export default Biljeska;