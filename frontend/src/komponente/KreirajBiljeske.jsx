import { useState } from "react";

function KreirajBiljeske(props) {

    const [unos, postaviUnos] = useState({
        naslov:"",
        sadrzaj:""
    });    
    function upravljajUnosima(event) {
        const[name,value] = event.target;

        postaviUnos((prevValue)=> {
            return {
                ...prevValue,
                [name]: value
            }            
        })
    };
    function dugmeDodaj(event){
        props.dodaj(biljeska)
        postaviUnos({
            naslov:"",
            sadrzaj:""
        })
  
        event.preventDefault();
    }

    return (
      <div>
        <form>
          <input name="naslov" placeholder="Title" onChange={upravljajUnosima} value={unos.naslov}/>
          <textarea name="sadrzaj" placeholder="Take a note..." rows="3" onChange={upravljajUnosima} value={unos.sadrzaj} />
          <button onClick={dugmeDodaj}>Add</button>
        </form>
      </div>
    );
  }
  
  export default KreirajBiljeske;
  