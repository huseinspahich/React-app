import React, { useState,useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import KreirajBiljeske from "./KreirajBiljeske";
import Biljeska from "./Biljeska";
import { ThemeProvider } from './ThemeContext';

function App() {
  const [biljeske, postaviBiljeske] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get("http://localhost:3000/notes");
        postaviBiljeske(response.data); 
      } catch (error) {
        console.error("Greška pri preuzimanju bilješki:", error);
      }
    };
    fetchNotes();
  }, []);

  const dodajBiljesku = async (biljeska) => {
    try {
      const response = await axios.post("http://localhost:3000/add-note", biljeska);
      console.log(response.data); // Odgovor sa servera
      postaviBiljeske((prevValue) => {
        return [...prevValue, biljeska]; // Dodavanje nove bilješke
      });
    } catch (error) {
      console.error("Greška pri dodavanju bilješke:", error);
    }
  };

  const obrisiBiljesku = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/delete-note/${id}`);
      console.log(response.data); // Odgovor sa servera
      postaviBiljeske((prevValue) => {
        return prevValue.filter((biljeska) => biljeska.id !== id); // Brisanje bilješke sa odgovarajućim ID-jem
      });
    } catch (error) {
      console.error("Greška pri brisanju bilješke:", error);
    }
  };

  return (
    <ThemeProvider>
      <Header />
      <KreirajBiljeske dodaj={dodajBiljesku} />
      {biljeske.map((biljeska) => {
        return (
          <Biljeska
            key={biljeska.id}
            id={biljeska.id}
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

