import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

function KreirajBiljeske(props) {
    // State za unos naslova i sadrzaja biljeske
    const [unos, postaviUnos] = useState({
        naslov: "",
        sadrzaj: ""
    });   
    const[done, setDone] = useState(false)
    //  State za greske (ako se ne popune oba polja)
    const [error, setError] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);  

    // Funkcija koja se poziva kad korisnik neto unese u formu
    function upravljajUnosima(event) {
        const { name, value } = event.target;
        // Azuriramo State za unos na osnovu promijena u input polju
        postaviUnos((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
        // Ako postoji greska, brisemo je kad korisnik nesto ukuca
        if (error) setError(""); 
    }

    // Funkcija koja se poziva kada korisnik klikne dugme "Add"
    function dugmeDodaj(event) {
        // Provjera da li su oba polja popunjena
        if (!unos.naslov.trim() || !unos.sadrzaj.trim()) {
            setError("Molimo unesite i naslov i sadržaj!"); 
            return; 
        }
        // Ako su oba polja popunjena, pozivamo funkciju koju smo proslijedili kao props
        props.dodaj(unos);
        // Resetujemo unos nakon što je bilješka dodata
        postaviUnos({
            naslov: "",
            sadrzaj: "",
        });
        // Sprijecavanje osvežavanja stranice po defaultu
        event.preventDefault();
    }

    function prosiri(){
      setDone(true)
    }

    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget); // Postavlja anchorEl na dugme
  };

  // **Funkcija za zatvaranje Popovera**
  const handlePopoverClose = () => {
      setAnchorEl(null); // Zatvara popover
  };

  // Provjera da li je Popover otvoren
  const open = Boolean(anchorEl);

    return (
        <div>
            {/* Forma za unos bilješke */}
            <form className="create-note">
              {done && (<input
                    name="naslov"
                    placeholder="Title" 
                    onChange={upravljajUnosima} 
                    value={unos.naslov} 
                />)}
                <textarea
                    name="sadrzaj"
                    placeholder="Take a note..."
                    rows= {done ? 4 : 1}
                    onChange={upravljajUnosima} 
                    value={unos.sadrzaj}
                    onClick={prosiri} 
                />
                
                {/* Prikazujemo grešku ako postoji */}
                {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}

                {/* Floating Action Button (FAB) za dodavanje biljeske */}
              <Zoom in={done}>
                <Fab
                 onClick={dugmeDodaj} 
                 onMouseEnter={handlePopoverOpen}
                 onMouseLeave={handlePopoverClose}
                sx={{'&:hover': {   backgroundColor: "#003C73"},transition: 'background-color 0.3s ease'}}>
                    <AddIcon /> 
                </Fab>
              </Zoom>
              <Popover
                   id="mouse-over-popover"
                   sx={{ pointerEvents: 'none' }}
                   open={open}
                   anchorEl={anchorEl}
                   anchorOrigin={{
                   vertical: 'bottom',
                   horizontal: 'left', }}
                   transformOrigin={{
                   vertical: 'top',
                   horizontal: 'left',}}
                   onClose={handlePopoverClose}
                   disableRestoreFocus>
                  <Typography sx={{ p: 1 }}>Dodaj bilješku</Typography>
               </Popover>

            </form>
        </div>
    );
}

export default KreirajBiljeske;