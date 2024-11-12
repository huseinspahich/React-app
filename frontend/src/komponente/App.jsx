import React,{ useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import KreirajBiljeske from "./KreirajBiljeske";
import Biljeska from "./Biljeska";

function App() {

    const[biljeske,postaviBiljeske] = useState([])

    function dodajBiljesku(biljeska){
      postaviBiljeske((prevValue) => {
        return [...prevValue, biljeska ]
      })
    }
    function obrisiBiljesku(id){
      postaviBiljeske((prevValue) => {
        return prevValue.filter((biljeska,index) => {
          return index !== id
        });
      });
    }

  return (
    <>
      <Header />
      <KreirajBiljeske dodaj={dodajBiljesku}/>
      {biljeske.map((biljeska,index) => {
        return(
        <Biljeska 
        key={index}
        index= {index}
        id={index}
        naslov={biljeska.naslov}
        sadrzaj={biljeska.sadrzaj}
        obrisi={obrisiBiljesku}
        />
      )  
      })}
      <Footer/>
    </>
  )
}

export default App;