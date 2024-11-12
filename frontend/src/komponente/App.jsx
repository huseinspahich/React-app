import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import KreirajBiljeske from "./KreirajBiljeske";
import Biljeska from "./Biljeska";
import { ThemeProvider } from './ThemeContext';

function App() {
  const [biljeske, postaviBiljeske] = useState([]);

  function dodajBiljesku(biljeska) {
    console.log("Dodavanje bilješke:", biljeska);
    postaviBiljeske((prevValue) => {
      return [...prevValue, biljeska];
    });
  }

  function obrisiBiljesku(id) {
    postaviBiljeske((prevValue) => {
      return prevValue.filter((biljeska, index) => {
        return index !== id;
      });
    });
  }

  return (
    <ThemeProvider>
      <Header />
      <KreirajBiljeske dodaj={dodajBiljesku} />
      {biljeske.map((biljeska, index) => {
        return (
          <Biljeska
            key={index}
            index={index}
            id={index}
            naslov={biljeska.naslov}
            sadrzaj={biljeska.sadrzaj}
            obrisi={obrisiBiljesku}
          />
        );
      })}
      <Footer />
    </ThemeProvider>
  );
}

export default App;

