import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

function Biljeska(props){
    const [anchorEl, setAnchorEl] = useState(null);  
    
    function klik(){
        props.obrisi(props.id)
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

    return(
        <div className="note">
            <h1>{props.naslov}</h1>
            <p>{props.sadrzaj}</p>
            <button 
            onClick={klik}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            >
                <DeleteIcon />
            </button>

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
                  <Typography sx={{ p: 1 }}>Obriši bilješku</Typography>
               </Popover>
            
        </div>
    )
}

export default Biljeska;