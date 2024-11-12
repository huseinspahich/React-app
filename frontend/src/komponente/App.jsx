import React,{ useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import KreirajBiljeske from "./KreirajBiljeske";
import Biljeska from "./Biljeska";

function App() {

    const[biljeska,postaviBiljeske] = useState([])

    function dodajBiljesku(biljeska){
      postaviBiljeske((prevValue) => {
        return [...prevValue, biljeska ]
      })
    }

  return (
    <>
      <Header />
      <KreirajBiljeske dodaj={dodajBiljesku}/>
      {biljeska.map((biljeska,index) => {
        <Biljeska 
        
        />
      })}
      
      <Footer/>
    </>
  )
}

export default App;