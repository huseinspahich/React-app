import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

function DodajDugme({ dugme }) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <>
            {/* Floating Action Button (FAB) */}
            <Fab
                onClick={dugme}  // Pozivanje funkcije dugme koju je prosleđeno kao prop
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                sx={{ '&:hover': { backgroundColor: "#003C73" }, transition: 'background-color 0.3s ease' }}
            >
                <AddIcon />
            </Fab>

            {/* Popover koji se pojavljuje kad korisnik pređe mišem preko dugmeta */}
            <Popover
                id="mouse-over-popover"
                sx={{ pointerEvents: 'none' }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography sx={{ p: 1 }}>Dodaj bilješku</Typography>
            </Popover>
        </>
    );
}

export default DodajDugme;
