import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

function KreirajBiljeske(props) {
    const [unos, postaviUnos] = useState({
        naslov: "",
        sadrzaj: ""
    });   
    const[done, setDone] = useState(false)
    const [error, setError] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);  

    function upravljajUnosima(event) {
        const { name, value } = event.target;
        postaviUnos((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
        if (error) setError(""); 
    }

    function dugmeDodaj(event) {
        if (!unos.naslov.trim() || !unos.sadrzaj.trim()) {
            setError("Molimo unesite i naslov i sadržaj!"); 
            return; 
        }
        
        props.dodaj(unos);
        postaviUnos({
            naslov: "",
            sadrzaj: "",
        });
        event.preventDefault();
    }

    function prosiri(){
      setDone(true)
    }

    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget)}; 
      
  const handlePopoverClose = () => {
      setAnchorEl(null);
  };

 
  const open = Boolean(anchorEl);

    return (
        <div>
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
                
               
                {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
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