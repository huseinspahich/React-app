import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

function DodajDugme(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  // Funkcija koja se poziva kad korisnik pređe mišem preko dugmeta
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Funkcija za zatvaranje Popover-a
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  // Provjera da li je Popover otvoren
  const open = Boolean(anchorEl);

  return (
    <>
      {/* Floating Action Button (FAB) */}
      <Fab
        onClick={props.onClick}  // Funkcija koju šaljemo kao props za dodavanje bilješke
        onMouseEnter={handlePopoverOpen}  // Aktiviraj Popover na hover
        onMouseLeave={handlePopoverClose}  // Zatvori Popover kad miš napusti dugme
        sx={{
          '&:hover': { backgroundColor: "#003C73" },
          transition: 'background-color 0.3s ease'
        }}
      >
        <AddIcon />
      </Fab>

      {/* Popover koji se pojavljuje kad korisnik pređe mišem preko dugmeta */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',  // Pozicionira popover ispod dugmeta
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',  // Pozicionira Popover iznad dugmeta
        }}
      >
        <Typography sx={{ p: 1 }}>Dodaj bilješku</Typography>
      </Popover>
    </>
  );
}

export default DodajDugme;
